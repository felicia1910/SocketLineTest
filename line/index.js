const linebot = require('linebot');
const line = require('@line/bot-sdk');
const { io } = require("socket.io-client");
require('dotenv').config();
//引入自訂義
const lineChannel = require('./setting');


const bot = new linebot(lineChannel);
const client = new line.Client({
  channelAccessToken: lineChannel.channelAccessToken,
  channelSecret: lineChannel.channelSecret
});

let socket = null;
const socketClient = () => {
  socket = io("https://socketio-server-testing.herokuapp.com/");
};

const sendMessage = (mes) => {
  console.log("sending new message");
  socket.emit("sendMessage", mes);
};

// 程式碼都寫在下面這個區塊內
const getBot = () => {
  socketClient();
  let getMes = {}
  bot.on('message', async event => {
    console.log('event.message.text', event);

    // let mes = {
    //   type: 'text',
    //   text: 'hello,world'
    // }
    if (event.message.type === 'text') {
      catchUser(event.source.userId).then(ee => {
        if (ee) {
          sendMessage({
            type:event.message.type,
            textId:event.message.id,
            message: event.message.text,
            name: ee.userName,
            userId: event.source.userId,
            pic: ee.pic,
            timestamp: event.timestamp,
            time:new Date(event.timestamp),
            st:ee.st,
            which:1,
            user:true
          });
          event.reply(event.message.text + '成功');
        }
      })

    }
    getMes = {
      userText: {
        type: event.message.type,
        text: event.message.text,
        timestamp: event.source.timestamp,
        user: getUser
      }
    }
  })
  return getMes
}

const catchUser = (id) => new Promise((resolve, reject) => {
  //從訊息只能撈出聊天訊息跟id，要另外撈出資料
  client.getProfile(id)
    .then((profile) => {
      let getUser = {
        userName: profile.displayName,//顯示使用者名字
        id: profile.userId,
        pic: profile.pictureUrl,// 顯示使用者大頭照網址
        st: profile.statusMessage// 使用者自介內容
      }
      console.log('getUser', getUser);
      resolve(getUser);
    })
    .catch((err) => {
      console.log('userErr', err)
      // error handling
    });
})


//加好友
bot.on('follow', async event => {
  console.log('加了++', event)
  event.reply('好耶加好友成功')
})

//解除好友
bot.on('unfollow', async event => {
  console.log('QQ', event)
})

exports = module.exports = {};
exports.bot = bot;
exports.botGet = getBot();
exports.client = client;