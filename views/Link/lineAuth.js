const querystring = require('querystring');
let callbackUrl = "https://socket-line-test.herokuapp.com/callback";
console.log('querystring',querystring);

const linkLineFun = () => {

    const urlParams = new URLSearchParams(window.location.search);
    console.log('urlParams', urlParams)
    if (urlParams.has('state') && urlParams.has('code')) {
        const state = urlParams.get('state');
        const code = urlParams.get('code');
        if (state === 'State') {
            const URL = 'https://api.line.me/oauth2/v2.1/token?';
            const getTokenUrl = `${URL}`;
            const getTokenBody = queryString.stringify({
                grant_type: 'authorization_code',
                code,
                redirect_uri: callbackUrl,
                client_id: '1657376867',
                client_secret: 'b486c65259765275f5e086c8acfdc1d6',
            });
            axios.post(getTokenUrl, getTokenBody).then((e1) => {
                const token = e1.data.access_token;
                const idToken = e1.data.id_token;
                console.log(e1);
                const getProfileApiUrl = 'https://api.line.me/v2/profile';
                axios({
                    method: 'GET',
                    url: getProfileApiUrl,
                    responseType: 'json', // responseType 也可以寫在 header 裡面
                    headers: {
                        Authorization: `Bearer ${token}`, // Bearer 跟 token 中間有一個空格
                    },
                }).then((e2) => {
                    alert(`line user id: ${e2.data.userId}, display name:${e2.data.displayName}`);
                    console.log(JSON.stringify(e2));

                    const getVerifyApiUrl = 'https://api.line.me/oauth2/v2.1/verify';
                    const getVerifyBody = queryString.stringify({
                        client_id: '1657376867',
                        id_token: idToken,
                    });
                    axios.post(getVerifyApiUrl, getVerifyBody).then((e3) => {
                        alert(`line email: ${e3.data.email}`);
                        console.log(JSON.stringify(e3));
                    }).catch((error) => {
                        console.log(`錯誤: ${error}`);
                    });
                }).catch((error) => {
                    console.log(`錯誤: ${error}`);
                });
            })
                .catch((error) => {
                    console.log(error);
                    alert(error);
                });
        }
    }

};
linkLineFun();
