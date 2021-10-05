'use strict';
const linebot = require('linebot');
const express = require('express');
const BodyParser = require('body-parser');
const cors = require('cors');
// Line Channel info
const bot = linebot({
    channelId: '1656330672',//process.env.channelId,
    channelSecret: '2036133d57ee3e0f6f318423c0000ee9',
    channelAccessToken: 'htgAj7q1TMGeyxIzhHw7ExEXT00eg5UuLzHzLiFz+OeeN7U/2+IZtX2i9YFHQcLszMd+Cvmt3r8/1wZTmKznGz5vC54lQU/VT3msf/HZt8dG5Ny3L3dKkR+qE/rsbPGmiMpXB6SpA9sRRCQVVPhFCAdB04t89/1O/w1cDnyilFU=',
});

const linebotParser = bot.parser();
const app = express();
// for line webhook usage
app.post('/linewebhook', linebotParser);
app.use(cors());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());

const port = process.env.PORT || 4000;
// a http endpoint for trigger broadcast
app.post('/broadcast', (req, res) => {
  bot.broadcast(req.body.message).then(() => {
    res.send('broadcast ok');
  }).catch(function (error) {
    res.send('broadcast fail');
  });
});

app.listen(port);

// echo user message
bot.on('message', function (event) {
  // get user message from `event.message.text`
  // reply same message
  var replyMsg = `${event.message.text}`;
  event.reply(replyMsg).then(function (data) {
    console.log('ok')
  }).catch(function (error) {
    console.error(error)
  });
});