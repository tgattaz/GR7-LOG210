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
app.use(bodyparser.json());
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

app.post('/api/auth', (req, res) => {
    res.status(400).json({ errors:{global: "Invalid credentials"}});
});

app.get('/roles',(req,res)=> {
    //code pour afficher table de la base de donnée
    connection.query('SELECT * FROM catalogue_role',(err,results)=>{
        if(err){
            return res.send(err);
        }
        else{
            return res.send(results);
        }
    })
});
/** Requette pour la class employe */
app.post('/addEmploye',(req,res)=>{

    const {nom, prenom, telephone, motDePasse, role} = req.body.employe;
    const values = [nom, prenom, telephone, motDePasse, role];
    
    connection.query("INSERT INTO employe (nom, prenom,telephone,motDePasse,role) VALUES (?,?,?,?,?);" , values, (err,results) => {
        if(err){
            return res.send(err);
        }
        else{
            return res.send('Employe ajouté');
        }
    })
});
app.get('/employes',(req,res)=> {
    //code pour afficher table de la base de donnée
    connection.query('SELECT * FROM employe',(err,results)=>{
        if(err){
            return res.send(err);
        }
        else{
            return res.send(results);
        }
    })
});

/** Requette pour la class Organisme */
app.post('/addOrganisme',(req,res)=>{

    const {nom, noCivique,rue,ville,province,codePostal,telephone,fax,courriel} = req.body.organisme;
    const values = [nom,noCivique,rue,ville,province,codePostal,telephone,fax,courriel];
    
    connection.query("INSERT INTO organisme (nom, noCivique,rue,ville,province,codePostal,telephone,fax,courriel) VALUES (?,?,?,?,?,?,?,?,?);" , values, (err,results) => {
        if(err){
            return res.send(err);
        }
        else{
            return res.send('Organisme ajouté');
        }
    })
});
app.get('/organismes',(req,res)=> {
    //code pour afficher table de la base de donnée
    connection.query('SELECT * FROM Organisme',(err,results)=>{
        if(err){
            return res.send(err);
        }
        else{
            return res.send(results);
        }
    })
});

/** Requette pour la class Organisme Réferent */
app.post('/addOrgaRef',(req,res)=>{

    const {nom,noCivique,rue,ville,province,codePostal,telephoneBureau,fax,courriel,siteWeb,etat} = req.body.organisme_referent;
    const values = [nom,noCivique,rue,ville,province,codePostal,telephoneBureau,fax,courriel,siteWeb,etat];
    
    connection.query("INSERT INTO organisme_referent (nom,noCivique,rue,ville,province,codePostal,telephoneBureau,fax,courriel,siteWeb,etat) VALUES (?,?,?,?,?,?,?,?,?,?,?);" , values, (err,results) => {
        if(err){
            return res.send(err);
        }
        else{
            return res.send('Organisme référent ajouté');
        }
    })
});
app.get('/organismes_referents',(req,res)=> {
    //code pour afficher table de la base de donnée
    connection.query('SELECT * FROM organisme_referent',(err,results)=>{
        if(err){
            return res.send(err);
        }
        else{
            return res.send(results);
        }
    })
});

app.listen(PORT, err => {
    if(err) throw err;
    console.log('Server start!');
});
