## Project setup
```
yarn install

or

npm i
```

### Compiles and hot-reloads for development
```
yarn run dev

or

npm run dev
```

### Line筆記
此為line server，會從line接收到訊息後，再傳給socketio的server，再經由socketio統一傳給前端
1.佈版後需要將server布置到Webhook settings的Webhook URL :https://developers.line.biz/console/channel/1656330672/messaging-api

*-開發用需要自行申請"官方帳號"，Use webhook 需要打開，將server串上

*-需要加上linewebhook(index設定的)，例如:https://5a51-111-248-170-164.ngrok.io/linewebhook

2.佈板前在主機測試可以使用ngrok:https://dashboard.ngrok.com/get-started/setup

*開啟後輸入ngrok http 4000會拿到一串可以暫時佈在line上的網址

### heroku設定
聊天需求
LINE_BOT_CHANNEL_SECRET
LINE_BOT_CHANNEL_TOKEN
-------------------------
綁定需求
LINE_LOGIN_CHANNEL_ID
LINE_LOGIN_CHANNEL_SECRET
### 使用者教學
參考:https://blog.tinybook.cc/line-messaging-api-%E7%94%B3%E8%AB%8B%E5%8F%8A%E4%B8%B2%E6%8E%A5%E8%A8%AD%E5%AE%9A/



教學參考:
https://ithelp.ithome.com.tw/articles/10229829