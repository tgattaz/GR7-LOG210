var express = require('express');
var mysql = require('mysql');
var app = express();


var connection = mysql.createConnection({
    host:'us-cdbr-iron-east-01.cleardb.net',
    user:'b2af54710141cb',
    password:'f361883b',
    database:'heroku_56876da023ab330'
});
connection.connect();
app.get('/', function(req, res) {

    connection.query('SELECT * FROM equipe',function(err,rows,fields){
        if(err){
            console.log('error: ',err);
            throw err;
        }
        Response.send(['Vous êtes à l\'accueil',rows]);
    });
});
let port = process.env.PORT;
if(port==null || port==""){
    port=8000;
}
app.listen(port);