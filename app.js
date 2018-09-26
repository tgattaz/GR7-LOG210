var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
    host:'us-cdbr-iron-east-01.cleardb.net',
    user:'b2af54710141cb',
    password:'f361883b',
    database:'heroku_56876da023ab330'
});

app.get('/', function(req, res) {
    
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vous êtes à l\'accueil');
});
let port = process.env.PORT;
if(port==null || port==""){
    port=8000;
}
app.listen(port);