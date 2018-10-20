const mysql = require("mysql");
const settings = require('./settings.json');
var db;

function connectDatabase(){
    if(!db){
        db = mysql.createConnection(settings);

        db.connect(function(err){
            if(!err){
                console.log('Database is connected!');
            } else {
                console.log('error connect database !');
            }
        })
    }
    return db;
}

module.exports = connectDatabase();