//可以放雲端的版本(開發中需要做兩個server)
var http = require('http');
var socketio = require('socket.io');
//cors相關
var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
var port = process.env.PORT || 4000;

var options = {
    // key: fs.readFileSync('這個網域的 ssl key 位置'),
    // cert: fs.readFileSync('這個網域的 ssl fullchain 位置')
}
//http & socket port
console.log("Server socket api 4000")

var server = http.createServer(app);
server.listen(port, function () {
    console.log('API listening on *:' + port);
})
//>V3後會有cors的問題
var io = socketio(server, {
    cors: {
        origin: '*',
    }
});


let messages = [
    { name: "Majer", message: "Welcome!" }
]

var typing = false
var timer = null
//用 socket 方式取得
io.on('connection', function (socket) {
    console.log('user connected')
    socket.emit("allMessage", messages)

    socket.on("sendMessage", function (message) {
        console.log(message)
        messages.push(message)
        io.emit("newMessage", message)
    })

    socket.on('sendTyping', function () {
        console.log('typing')
        typing = true
        io.emit("someoneIsTyping", typing)
        clearTimeout(timer)
        timer = setTimeout(() => {
            typing = false
            io.emit("someoneIsTyping", typing)
        }, 3000)
    })
})


const tmpMES = {
    mes: {
        type: 'message',
        message: {
            type: 'text',
            id: '14832063862709',
            text: 'tt',
            content: [],//[Function (anonymous)]
        },
        timestamp: 1632970336787,
        type: 'user',
        userId: 'U2f246c610be7fe3e6e86cdaeda6c8963',
        profile: [],//[Function (anonymous)]
        member: []//[Function (anonymous)]
    },
    replyToken: 'fde90f9982f34e7ba0ef6ecf9aecdb97',
    mode: 'active',
    reply: []//[Function (anonymous)]
}
