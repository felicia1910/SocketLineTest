const linebot = require('linebot');
const line = require('@line/bot-sdk');
const { io } = require("socket.io-client");
//這邊要注意fetch版本太高會有問題
const fs = require('fs');
const cp = require('child_process');
const path = require('path');
const fetch = require('node-fetch');
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
  //socket = io("https://socketio-server-testing.herokuapp.com/");
  socket = io("http://localhost:4010/");
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

    let doObj = (event, ee) => {
      return {
        type: event.message.type,
        textId: event.message.id,
        name: ee.userName,
        userId: event.source.userId,
        pic: ee.pic,
        timestamp: event.timestamp,
        time: new Date(event.timestamp),
        st: ee.st,
        which: 1,
        user: true
      }
    }
    if (event.message.type === 'text') {
      catchUser(event.source.userId).then(ee => {
        if (ee) {
          let getObj = doObj(event, ee);
          sendMessage({
            ...getObj,
            message: event.message.text,
          });
          event.reply(event.message.text + '成功');
        }
      })

    }
    else if (event.message.type === 'sticker') {
      //https://stickershop.line-scdn.net/stickershop/v1/sticker/428303664/ANDROID/sticker.png
      catchUser(event.source.userId).then(ee => {
        if (ee) {
          let getObj = doObj(event, ee);
          sendMessage({
            ...getObj,
            message: `https://stickershop.line-scdn.net/stickershop/v1/sticker/${event.message.stickerId}/ANDROID/sticker.png`,
          });
          event.reply('貼圖成功');
        }
      })
    } else if (event.message.type === 'image') {

      const downloadPath = path.join(__dirname, 'downloaded', `${event.message.id}.png`);
      downloadContent(event.message.id, downloadPath)
        .then((downloadPath) => {
          //'http://localhost:4000/' + baseURL + '/downloaded/' + path.basename(downloadPath)
          catchUser(event.source.userId).then(ee => {
            let getObj = doObj(event, ee);
            sendMessage({
              ...getObj,
              message: Buffer.from(downloadPath).toString('base64'),
            });
            event.reply('下載圖片成功');
          })

        });
    }

  })
}

const downloadContent=(messageId, downloadPath)=> {
  return client.getMessageContent(messageId)
    .then((stream) => new Promise((resolve, reject) => {
      const writable = fs.createWriteStream(downloadPath);
      console.log('stream',stream)
      stream.pipe(writable);
      //stream.on('end', () => resolve(downloadPath));
      stream.on('data', ee => resolve(ee));
      stream.on('error', reject);
    }));
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

