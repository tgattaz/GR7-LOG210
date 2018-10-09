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



app.get('/', (req, res) =>{
    
    
   res.send('Vous êtes à l\'accueil ');
});

app.get('https://gr7-log210.herokuapp.com/roles',(req,res) => {
    //code pour afficher table de la base de donnée
    connection.query('SELECT * FROM catalogue_role',(err,results) => {
        if(err){
            console.log('error: ',err);
            throw err;
        }
        else{
            return res.json({
                data: rows
            });
        }
        
    });
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