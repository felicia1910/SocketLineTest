'use strict';
const express = require('express');
const BodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
//引入自訂義
const bot = require('./line/index');
const linebotParser = bot.bot.parser();
const app = express();
//轉html file
app.engine('html', require('ejs').renderFile);//需放名為view的資料夾


app.post('/linewebhook', linebotParser, (req, res) => {
  let body = req.body;
  console.log('body,body')
});

app.use(cors());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());

const port = process.env.PORT || 4000;


app.get('/link', function(req, res){
  let url=port==4000?'https://localhost:4000/callback':url+'/callback';
  res.render('Link/linkPage.html',{url: url});
});

// a http endpoint for trigger broadcast
app.get("/callback",(req, res, next)=> {
  res.end("wait...")
});

app.post('/broadcast', (req, res) => {
  //console.log('req',req);
  bot.bot.broadcast(req.body.message).then(() => {
    res.send('broadcast ok');
  }).catch(function (error) {
    res.send('broadcast fail');
  });
});

app.post('/pushMes', (req, res) => {
  console.log('!!!!!!!!!!req!!!!!!!!!', req.body);
  res.send({
    isSuccess: true,
    mes: '傳送成功!'
  });
  bot.client.pushMessage(req.body.id,
    { type: 'text', text: req.body.mes }
  );
});

app.get('/getImg', (req, res) => {
  fs.readFile(`./line/downloaded/${req.query.name}.${req.query.type}`, (err, data) => {
    if (err) throw err; // Fail if the file can't be read.
    res.end(data);
  });
});

//++++++++++++++++++++++++++++++++++++++++++++++++++++
//fb
//++++++++++++++++++++++++++++++++++++++++++++++++++++
// const xhub = require('express-x-hub');
// app.use(xhub({ algorithm: 'sha1', secret: process.env.APP_SECRET }));
app.post('/messaging-webhooks', (req, res) => {    // Creates the endpoint for the messaging-webhooks 

  let body = req.body;

  // Checks this is an event from a page subscription
  if (body.object === 'page') {

    // Iterates over each entry - there may be multiple if batched
    body.entry.forEach(function (entry) {

      // Gets the message. entry.messaging is an array, but 
      // will only ever contain one message, so we get index 0
      let webhook_event = entry.messaging[0];
      console.log(webhook_event);
    });

    // Returns a '200 OK' response to all requests
    res.status(200).send('EVENT_RECEIVED');
  } else {
    // Returns a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }

});

// Adds support for GET requests to our webhook
app.get('/messaging-webhooks', (req, res) => {

  // Your verify token. Should be a random string.
  let VERIFY_TOKEN = req.query['hub.verify_token']//"<YOUR_VERIFY_TOKEN>"
  console.log('VERIFY_TOKEN', VERIFY_TOKEN)
  // Parse the query params
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];

  // Checks if a token and mode is in the query string of the request
  if (mode && token) {

    // Checks the mode and token sent is correct
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {

      // Responds with the challenge token from the request
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);

    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
});

app.listen(port);

