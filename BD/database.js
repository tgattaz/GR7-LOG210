const mysql = require("mysql");
const settings = require('./settings.json');
var dbPool;

function createPoolDatabase(){
    if(!dbPool){
        dbPool = mysql.createPool(settings);
    }
    return dbPool;
}

module.exports = createPoolDatabase();