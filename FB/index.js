const linebot = require('linebot');
const line = require('@line/bot-sdk');
const { io } = require("socket.io-client");
//這邊要注意fetch版本太高會有問題
const fs = require('fs');
const cp = require('child_process');
const path = require('path');
const fileType = require('file-type');
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
        imgType: null,
        user: true
      }
    }

    //來的是文字(有emojil要注意)
    if (event.message.type === 'text') {

      let emojis = event.message.emojis ? event.message.emojis.map(ee => {
        return `https://stickershop.line-scdn.net/sticonshop/v1/sticon/${ee.productId}/iPhone/${ee.emojiId}.png`
      }) : null

      catchUser(event.source.userId).then(ee => {
        if (ee) {
          let getObj = doObj(event, ee);
          sendMessage({
            ...getObj,
            emojis: emojis,
            message: event.message.text,
          });
          event.reply(event.message.text + '成功');
        }
      })

    }
    //來的是貼圖(要注意動圖)
    else if (event.message.type === 'sticker') {
      let sUrl = `https://stickershop.line-scdn.net/stickershop/v1/sticker/${event.message.stickerId}`
      let stickerUrl = event.message.stickerResourceType == 'ANIMATION' ? `${sUrl}/ANDROID/sticker_animation.png` : `${sUrl}/ANDROID/sticker.png`
      catchUser(event.source.userId).then(ee => {
        //sticker_animation.png
        if (ee) {
          let getObj = doObj(event, ee);
          sendMessage({
            ...getObj,
            message: stickerUrl
          });
          event.reply('貼圖成功');
        }
      })
    }
    //來的是圖片(要注意過來的圖片是不是gif)
    else if (event.message.type === 'image' || event.message.type === 'video' || event.message.type === 'audio') {

      //先取得data
      getContent(event.message.id)
        .then((content) => {
          //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
          //可以拼出一張完整的圖片
          //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
          let imgBase = '';
          for (let i in content.getBuf) {
            imgBase += Buffer.from(content.getBuf[i], 'utf8').toString('base64');
          }

          //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
          //拿拿到的data type去做路徑
          //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
          fileType.fromBuffer(content.getBuf[0]).then(e => {
            console.log('找到類別了!!!', e);
            //路徑
            let downloadPaths = path.join(__dirname, 'downloaded', `${event.message.id}.${e.ext}`);
            //再call content去做下載
            downloadContent(event.message.id, downloadPaths).then(downloadContent => {
              //'http://localhost:4000/' + baseURL + '/downloaded/' + path.basename(downloadPath)
              console.log('downloadContent', downloadContent)
              if (downloadContent) {
                catchUser(event.source.userId).then(ee => {
                  let getObj = doObj(event, ee);
                  sendMessage({
                    ...getObj,
                    imgType: e.ext,
                    message: event.message.id,
                  });
                  let mes = event.message.type === 'image' ? '圖片' : event.message.type === audio ? '音檔' : '影片'
                  event.reply(`下載${mes}成功`);
                })
              }

            })
          })

        });

    }
    //來的是影片
    // else if (event.message.type === 'video') {
    //   downloadContent(event.message.id, downloadPath)
    //     .then((downloadPath) => {
    //       console.log('handledownloadPath', downloadPath.length);
    //       catchUser(event.source.userId).then(ee => {
    //         let getObj = doObj(event, ee);
    //         sendMessage({
    //           ...getObj,
    //           message: downloadPath,//Buffer.from(downloadPath).toString('base64'),
    //         });
    //         event.reply('下載影片成功');
    //       })

    //     });
    // }

  })
}

//圖片影片類型要另外call api
const getContent = (messageId) => {
  return client.getMessageContent(messageId)
    .then((stream) => new Promise((resolve, reject) => {
      let getBuf = [];
      stream.on('data', (ee) => { getBuf.push(ee); });
      stream.on('end', () => { resolve({ getBuf }); });
      stream.on('error', reject);
    }));
}


//圖片影片類型要另外下載call api
const downloadContent = (messageId, downloadPath) => {
  return client.getMessageContent(messageId)
    .then((stream) => new Promise((resolve, reject) => {
      const writable = fs.createWriteStream(downloadPath);
      stream.pipe(writable);
      stream.on('end', () => { resolve('success'); });
    }));
}

//抓取傳來訊息的人的細節資料
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

