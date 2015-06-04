var apikey = require('./mandrill_key.json');
var m = require('mandrill-api/mandrill');
var client = new m.Mandrill(apikey);


var recipient = "dan.sont@gmail.com";

var params = {
    "template_name": "signup",
    "template_content": [
        {
            "name": "",
            "content": ""
        }
    ],

    "message": {
        "to":[{"email": recipient}]
    }
};


client.messages.sendTemplate(
    params,
    function res(res) {
        console.log(res);
    },
    function err(err) {
        console.log(err);
    }
);