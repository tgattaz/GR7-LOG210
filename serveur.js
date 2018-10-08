const {createServer}=require('http');
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');
const mysql = require('mysql');
const aws= require('aws-sdk');
const bodyParser = require('body-parser');

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);

const app = express();
const dev = app.get('env')!=='production';

if(!dev){
    app.disable('x-powered-by');
    app.use(compression());
    app.use(morgan('common'));

    app.use(express.static(path.resolve(__dirname,'build')));

    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname,'build','index.html'));
    });
}

if(dev){
    app.use(morgan('dev'));
}

const server = createServer(app);


/*//connection à la bd mysql heroku
var connection = mysql.createConnection({
    host:'us-cdbr-iron-east-01.cleardb.net',
    user:'b2af54710141cb',
    password:'f361883b',
    database:'heroku_56876da023ab330'
});

app.get('/posts', function(req, res) {

    connection.connect();

    //code pour afficher table de la base de donnée
    connection.query('SELECT * FROM catalogue_role',function(err,rows,fields){
        if(err){
            console.log('error: ',err);
            throw err;
        }
        res.send(results);
    });
    connection.end();
   // res.send('Vous êtes à l\'accueil ');
});

*/
let port = process.env.PORT;
if(port==null || port==""){
    port=8000;
}
/*pour tester localement decomenter la ligne suivante et commente la ligne d'apres
 *ouvree un navigateur écrive localhost:8080
 *p.s. n'oublie pas de executer le fichier avant de tester dans le navegateur
 */
/*app.listen(PORT, err => {
    if(err) throw err;
    console.log('Server start!');
});*/
app.listen(port);