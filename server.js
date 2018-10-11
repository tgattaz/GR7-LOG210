const {createServer}=require('http');
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const mysql = require('mysql');
const aws= require('aws-sdk');

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 8000);

const app = express();

const server = createServer(app);

//connection à la bd mysql heroku
const connection = mysql.createConnection({
    host:'us-cdbr-iron-east-01.cleardb.net',
    user:'b2af54710141cb',
    password:'f361883b',
    database:'heroku_56876da023ab330'
});
connection.connect(err =>{
    if(err){
        return err;
    }
});

app.use(cors());

app.get('/', (req, res) =>{
    console.log(req.body)
    
   res.send('Vous êtes à l\'accueil aller sur /roles');
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


app.listen(PORT, err => {
    if(err) throw err;
    console.log('Server start!');
});