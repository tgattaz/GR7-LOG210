const mysql = require("mysql");
const settings = require('./settings.json');
var db;

function connectDatabase(){
    if(!db){
        db = mysql.createConnection(settings);
    }
    return db;
}

module.exports = connectDatabase();