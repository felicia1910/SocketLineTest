'use strict';
const express = require('express');
const BodyParser = require('body-parser');
const cors = require('cors');
//引入自訂義
const bot = require('./line/index');

const linebotParser = bot.bot.parser();
const app = express();
// for line webhook usage
app.post('/linewebhook', linebotParser);
app.use(cors());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());

const port = process.env.PORT || 4000;
// a http endpoint for trigger broadcast
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
    isSuccess:true,
    mes:'傳送成功!'
  });
  bot.client.pushMessage(req.body.id,
    { type: 'text', text: req.body.mes }
  );
});

app.listen(port);

