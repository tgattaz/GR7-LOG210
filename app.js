var express = require('express');
var mysql = require('mysql');
var app = express();



let port = process.env.PORT;
if(port==null || port==""){
    port=8000;
}
app.listen(port);