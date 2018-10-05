var express = require('express');
var mysql = require('mysql');
var aws= require('aws-sdk');


var app = express();

//connection à la bd mysql heroku
var connection = mysql.createConnection({
    host:'us-cdbr-iron-east-01.cleardb.net',
    user:'b2af54710141cb',
    password:'f361883b',
    database:'heroku_56876da023ab330'
});
connection.connect();



app.get('/', function(req, res) {
    /*code pour afficher table de la base de donnée
    connection.query('SELECT * FROM equipe',function(err,rows,fields){
        if(err){
            console.log('error: ',err);
            throw err;
        }
        res.send(['Vous êtes à l\'accueil ',rows]);
    });
    */
    res.send('Vous êtes à l\'accueil ');
});


let port = process.env.PORT;
if(port==null || port==""){
    port=8000;
}
/*pour tester localement decomenter la ligne suivante et commente la ligne d'apres
 *ouvree un navigateur écrive localhost:8080
 *p.s. n'oublie pas de executer le fichier avant de tester dans le navegateur
 */
//app.listen(8080);
app.listen(port);