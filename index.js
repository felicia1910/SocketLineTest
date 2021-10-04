// 如果不需要用 https 的話，要改成引用 http 喔
const http = require('http');
const socketio = require('socket.io');
const express = require('express');
const app = express();
const cors = require('cors');
//引入自訂義
const bot = require('./line/index');
app.use(cors());

//api port
const port = process.env.PORT || 4000;
// Add Access Control Allow Origin headers
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", " * ");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// });

// app.post('/webhook', bot.bot.parser());

const server = http.createServer(app);
//server.listen(process.env.PORT || 4040)
server.listen(port, function () {
    console.log('bot', bot);
    console.log('API listening on *:' + port);
})
//>V3後會有cors的問題
const io = socketio(server, {
    cors: {
        origin: '*',
    }
});

console.log("Server socket 4040 , api 4000")

//
let all = {
    line: {
        name: 'line',
        mes: [
            {
                userId: 'U2f246c610be7fe3e6e86cdaeda6c8963',
                userName:'狒',
                userUrl:'https://sprofile.line-scdn.net/0hmVr9bab_MnlfQCR3ynNMBi8QMRN8MWtrJHIoGWNDO09rI30rdiB6SDkSOEBieCB4dSQtGDkTOUFTU0UfQRbOTVhwbE5md3ctciF7nA',
                userStatus:'',
                //user講的話用true，回復為false
                mes: [
                    { user:true, message: "Welcome!",timestamp: 1632970336787},
                    { user:false, message: 'Hi',timestamp: 1632970336787 }
                ]
            }
        ]
    }
}

let messages = [
    { name: "Admin", message: "Welcome!" }
]

//用 socket 方式取得
io.on('connection', function (socket) {
    console.log('user connected')
    socket.emit("allMessage", messages)
    // let test=bot.getBot();
    // console.log('test??',test)
    socket.on("sendMessage", function (mes) {
        console.log('??', mes)
        //找到有沒有這個人的聊天紀錄
        // let find = all.map(e => { return e.name }).indexOf(mes.name);
        // console.log('find', find);
        // if (find !== -1) {
        //     all[find].mes.push(mes)
        // } else {
        //     all.push({ name: mes.name, mes: [mes] })
        // }
        // console.log('all', all)
        // io.emit("newMessage", all)
    })

})



