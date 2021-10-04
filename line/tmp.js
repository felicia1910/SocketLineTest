//這邊要注意fetch版本太高會有問題
const fetch = require('node-fetch');

const lineLogin = () => {
    let url = 'https://api.line.me/v2/oauth/accessToken';
    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            grant_type: 'client_credentials',
            redirect_uri: 'http://localhost:4000/',
            client_id: '1656330672',
            client_secret: '2036133d57ee3e0f6f318423c0000ee9'
        })
    }).then((response) => {
        return response.json();
    }).then((jsonData) => {

    })
}

const callLineToken = () => {
    let url = 'https://api.line.me/v2/oauth/accessToken';
    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: '1656330672',
            client_secret: '2036133d57ee3e0f6f318423c0000ee9'
        })
    }).then((response) => {
        return response.json();
    }).then((jsonData) => {
        console.log('ok', jsonData.access_token);
        if (jsonData.access_token) {
            console.log('??', { access_token: jsonData.access_token })
            fetch('https://api.line.me/v2/oauth/revoke', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({ access_token: jsonData.access_token })
            }).then((response) => {
                console.log('ok2??', response);
                return response.text()
            }).then((data) => {
                console.log('ok2', data);
            }).catch((err) => {
                console.log('錯誤2:', err);
            })
        }
        //https://api.line.me/v2/bot/message/progress/narrowcast
    }).catch((err) => {
        console.log('錯誤:', err);
    })
}