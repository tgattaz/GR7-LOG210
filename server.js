const { createServer } = require('http');
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mysql = require('mysql');
<<<<<<< HEAD
const aws = require('aws-sdk');

=======
const aws= require('aws-sdk');
const JSAlert = require("js-alert");
>>>>>>> master
//il y avait cela dans le code ça faisait crash mon server 
//import auth from "./routes/auth";
//const auth = require("./routes/auth");


//connection à la bd mysql heroku
const db= require('./BD/database');


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


app.use(cors());

app.get('/', (req, res) => {
    console.log(req.body)

    res.send('Vous êtes à l\'accueil aller sur /roles');
});
app.post('/login', function (req, res) {
    console.log(req)
    res.send('test connection post');
});

//il y avait cela dans le code ça faisait crash mon server 
//app.post('/api/auth',auth);

app.get('/roles', (req, res) => {
    //code pour afficher table de la base de donnée
    db.query('SELECT * FROM catalogue_role',(err,results)=>{
        if(err){
            return res.send(err);
        }
        else {
            return res.send(results);
        }
    })
});
/** Requette pour la class employe */
app.post('/addEmploye', (req, res) => {

    const { nom, prenom, telephone, motDePasse, role } = req.body.employe;
    const values = [nom, prenom, telephone, motDePasse, role];
    db.query("INSERT INTO employe (nom, prenom,telephone,motDePasse,role) VALUES (?,?,?,?,?);" , values, (err,results) => {
        if(err){
            return res.send(err);
        }
        else {
            return res.send('Employe ajouté');
        }
    })
});
app.get('/employes', (req, res) => {
    //code pour afficher table de la base de donnée
    db.query('SELECT * FROM employe',(err,results)=>{
        if(err){
            return res.send(err);
        }
        else {
            return res.send(results);
        }
    })
});

/** Requette pour la class Organisme */
app.post('/addOrganisme', (req, res) => {

    const {nom, noCivique,rue,ville,province,codePostal,telephone,fax,courriel} = req.body.organisme;
    const values = [nom,noCivique,rue,ville,province,codePostal,telephone,fax,courriel];

    db.query("INSERT INTO organisme (nom, noCivique,rue,ville,province,codePostal,telephone,fax,courriel) VALUES (?,?,?,?,?,?,?,?,?);" , values, (err,results) => {
        if(err){
            return res.send(err);
        }
        else {
            return res.send('Organisme ajouté');
        }
    })
});
app.get('/organismes', (req, res) => {
    //code pour afficher table de la base de donnée
    db.query('SELECT * FROM organisme',(err,results)=>{
        if(err){
            return res.send(err);
        }
        else {
            return res.send(results);
        }
    })
});

/** Requette pour la class Organisme Réferent */
<<<<<<< HEAD
app.post('/addOrgaRef', (req, res) => {

    const {nom,noCivique,rue,ville,province,codePostal,telephoneBureau,fax,courriel,siteWeb,etat} = req.body.organisme_referent;
    const values = [nom,noCivique,rue,ville,province,codePostal,telephoneBureau,fax,courriel,siteWeb,etat];

    db.query("INSERT INTO organisme_referent (nom,noCivique,rue,ville,province,codePostal,telephoneBureau,fax,courriel,siteWeb,etat) VALUES (?,?,?,?,?,?,?,?,?,?,?);" , values, (err,results) => {
        if(err){
            return res.send(err);
        }
        else {
            return res.send('Organisme référent ajouté');
=======
app.post('/addOrgaRef',(req,res)=>{
    const {nom,noCivique,rue,ville,province,codePostal,telephoneBureau,fax,courriel,siteWeb,etat} = req.body.organisme_referent;
    const values = [nom,noCivique,rue,ville,province,codePostal,telephoneBureau,fax,courriel,siteWeb,etat];


    JSAlert.alert(values);
    db.query(
      "INSERT INTO Organisme_Referent (nom,noCivique,rue,ville,province,codePostal,telephoneBureau,fax,courriel,siteWeb,etat) VALUES (?,?,?,?,?,?,?,?,?,?,?);",
      values,
      (err, results) => {
        if (err) {
          JSAlert.alert("Organisme référent pas ajouté erreur");
          return res.send(err);
        } else {
          JSAlert.alert("Organisme référent ajouté");
          return res.send("Organisme référent ajouté");
>>>>>>> master
        }
      }
    );
});
app.get('/organismes_referents', (req, res) => {
    //code pour afficher table de la base de donnée
    db.query('SELECT * FROM organisme_referent',(err,results)=>{
        if(err){
            return res.send(err);
        }
        else {
            return res.send(results);
        }
    })
});
/** Requette pour la class Réferent */
app.post('/addRef', (req, res) => {
   
    const { nom, prenom, titre, telephoneCell, telephoneBureau, fax, courriel, preferenceReception  } = req.body.referent;
    const values = [nom, prenom, titre, telephoneCell, telephoneBureau, fax, courriel, preferenceReception];
    JSAlert.alert(values);
    db.query(
      "INSERT INTO referent  (nom,prenom,titre,telephoneCell,telephoneBureau,fax,courriel,preferenceReception) VALUES (?,?,?,?,?,?,?,?);",
      values,
      (err, results) => {
        if (err) {
          return res.send(err);
        } else {
            
          return res.send("Référent ajouté");
        }
      }
    );
});
app.get('/referents', (req, res) => {
    //code pour afficher table de la base de donnée
    db.query("SELECT * FROM referent", (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.send(results);
      }
    });
});

app.post('/recherche_referents', (req, res) => {

    const { recherche } = req.body.recherche_referent;
    const values = [recherche, recherche, recherche, recherche, recherche, recherche, recherche, recherche, recherche];
    
    db.query(
        'SELECT REF.* ' +
        'FROM `referent` REF ' +
        'LEFT JOIN `organisme_referent` OREF ON REF.noReferent = OREF.referent ' +
        'LEFT JOIN `organisme` ORG ON ORG.noOrganisme = OREF.organisme ' +
        'LEFT JOIN `dossier` D ON D.organisme = ORG.noOrganisme ' +
        'WHERE REF.nom LIKE CONCAT(\'%\', ?, \'%\') OR REF.prenom LIKE CONCAT(\'%\', ?, \'%\') OR ORG.nom LIKE CONCAT(\'%\', ?, \'%\') ' + 
        '  OR REF.titre LIKE CONCAT(\'%\', ?, \'%\') OR REF.telephoneCell LIKE CONCAT(\'%\', ?, \'%\') ' + 
        '  OR REF.telephoneBureau LIKE CONCAT(\'%\', ?, \'%\') OR ORG.telephone LIKE CONCAT(\'%\', ?, \'%\') ' + 
        '  OR OREF.telephoneBureau LIKE CONCAT(\'%\', ?, \'%\') OR D.noDossierFamille = ?', values, (err, results) => {
            if (err) {
                return res.send(err);
            }
            else {
                return res.send(results);
            }
        })
});

app.listen(PORT, err => {
    if(err) throw err;
    console.log('Server start on port:' +PORT + '!');
});
