require('github/fetch@master:/fetch.js');


const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};


function validate(response) {
    if (response.status != 200)
        throw new Error(response.statusText);

    return response.json();
}


function authorize(response) {
    headers.Authorization = `Bearer ${ response.token }`;
    return response;
}


function postable(x) { 
    return { 
        body: JSON.stringify(x), 
        method: 'post', 
        headers,
    }
}


let fetchApps = async function () {
    return await fetch('/app').then(validate);
}

let sendLogin = async function (data) {
    const response = await fetch('/user/login', postable(data)).then(validate).then(authorize);

    if (!response) {
        console.log('response', response);
        return;
    }

    return response;
}

let sendRegister = async function (data) {
    const response =  await fetch('/user', postable(data)).then(validate);
    return await login(data);

}

let sendPurchase = async function (app_id, token) {
    const data = {
        app_id: app_id,
        tok: token
    };
    return await fetch.post('/payment', postable(data)).then(validate);
}

export default { fetchApps, sendLogin, sendRegister, sendPurchase }