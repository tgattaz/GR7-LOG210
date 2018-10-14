const {createServer}=require('http');
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mysql = require('mysql');
const aws= require('aws-sdk');

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 8000);

const app = express();
/*const dev = app.get('env')!=='production';

if(!dev){
    app.disable('x-powered-by');
    app.use(compression());
    app.use(morgan('common'));

    app.use(express.static(path.resolve(__dirname,'public')));

    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname,'public','index.html'));
    });
}

if(dev){
    
}*/
app.use(morgan('dev'));

const server = createServer(app);

//connection à la bd mysql heroku
const connection = mysql.createConnection({
    host:'us-cdbr-iron-east-01.cleardb.net',
    user:'b2af54710141cb',
    password:'f361883b',
    database:'heroku_56876da023ab330'
});

app.use(cors());

app.get('/', (req, res) =>{
    console.log(req.body)

   res.send('Vous êtes à l\'accueil aller sur /roles');
});
app.post('/login', function (req, res) {
    console.log(req)
    res.send('test connection post');
  });

app.get('/posts', function(req, res) {

    //code pour afficher table de la base de donnée
    connection.query('SELECT * FROM catalogue_role',function(err,results){
        if(err){
            console.log('error: ',err);
            throw err;
        }
        res.send(results);
    });
   // res.send('Vous êtes à l\'accueil ');
});

app.get('/roles',(req,res)=> {
    //code pour afficher table de la base de donnée
    connection.query('SELECT * FROM catalogue_role',(err,results)=>{
        if(err){
            return res.send(err);
        }
        else{
            return res.json({
                data:results
            })
        }
    })
});

app.listen(PORT, err => {
    if(err) throw err;
    console.log('Server start!');
});