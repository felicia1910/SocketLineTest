'use strict';
const express = require('express');
const BodyParser = require('body-parser');
const socketio = require('socket.io');
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
    bot.bot.broadcast(req.body.message).then(() => {
    res.send('broadcast ok');
  }).catch(function (error) {
    res.send('broadcast fail');
  });
});

app.listen(port);

const server = http.createServer(app);
//>V3後會有cors的問題
// const io = socketio(server, {
//     cors: {
//         origin: '*',
//     }
// });
//用 socket 方式取得
// io.on('connection', function (socket) {
//     console.log('user connected')
//     socket.emit("allMessage", messages)
//     // let test=bot.getBot();
//     // console.log('test??',test)
//     socket.on("sendMessage", function (mes) {
//         console.log('??', mes)
//         //找到有沒有這個人的聊天紀錄
//         // let find = all.map(e => { return e.name }).indexOf(mes.name);
//         // console.log('find', find);
//         // if (find !== -1) {
//         //     all[find].mes.push(mes)
//         // } else {
//         //     all.push({ name: mes.name, mes: [mes] })
//         // }
//         // console.log('all', all)
//         // io.emit("newMessage", all)
//     })

// })
