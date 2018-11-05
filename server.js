const {
    createServer
} = require('http');
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mysql = require('mysql');
const aws = require('aws-sdk');
const JSAlert = require("js-alert");
//il y avait cela dans le code ça faisait crash mon server 
//import auth from "./routes/auth";
//const auth = require("./routes/auth");


//connection à la bd mysql heroku
const db = require('./BD/database');

import dotenv from "dotenv";
import auth from "./routes/auth";
const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 8000);

dotenv.config();
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

app.use('/api/auth', auth);

app.get('/roles', (req, res) => {
    //code pour afficher table de la base de donnée
    db.query('SELECT * FROM catalogue_role', (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send(results);
        }
    })
});
/** Requette pour la class employe */
app.post('/addEmploye', (req, res) => {

    const {
        nom,
        prenom,
        telephone,
        motDePasse,
        role
    } = req.body.employe;
    const values = [nom, prenom, telephone, motDePasse, role];
    db.query("INSERT INTO employe (nom, prenom,telephone,motDePasse,role) VALUES (?,?,?,?,?);", values, (err, results) => {
        if (err) {
            JSAlert.alert('employe pas ajouté erreur');
            return res.send(err);
        } else {
            JSAlert.alert('employe');
            return res.send('Employe ajouté');
        }
    })
});
app.get('/employes', (req, res) => {
    //code pour afficher table de la base de donnée
    db.query('SELECT * FROM employe', (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send(results);
        }
    })
});

app.get('/all', (req, res) => {


    //code pour afficher table de la base de donnée
    db.query('SELECT * FROM INFORMATION_SCHEMA.TABLES ', (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send(results);
        }
    })
});
app.get('/referent_organisme_referent', (req, res) => {
    //code pour afficher table de la base de donnée
    db.query('SELECT * FROM referent_organisme_referent ', (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send(results);
        }
    })
});

/** Requette pour la class Organisme */
app.post('/addOrganisme', (req, res) => {

    const {
        nom,
        noCivique,
        rue,
        ville,
        province,
        codePostal,
        telephone,
        fax,
        courriel
    } = req.body.organisme;
    const values = [nom, noCivique, rue, ville, province, codePostal, telephone, fax, courriel];

    db.query("INSERT INTO organisme (nom, noCivique,rue,ville,province,codePostal,telephone,fax,courriel) VALUES (?,?,?,?,?,?,?,?,?);", values, (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send('Organisme ajouté');
        }
    })
});
app.get('/organismes', (req, res) => {
    //code pour afficher table de la base de donnée
    db.query('SELECT * FROM organisme', (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send(results);
        }
    })
});

/** Requette pour la class Organisme Réferent */
app.post('/addOrgaRef', (req, res) => {
    const {
        nom,
        noCivique,
        rue,
        ville,
        province,
        codePostal,
        telephoneBureau,
        fax,
        curriel,
        siteWeb,
        etat
    } = req.body.organisme_referent;
    const values = [nom, noCivique, rue, ville, province, codePostal, telephoneBureau, fax, curriel, siteWeb, etat];


    JSAlert.alert(values);
    db.query(
        "INSERT INTO organisme_referent (nom,noCivique,rue,ville,province,codePostal,telephoneBureau,fax,curriel,siteWeb,etat) VALUES (?,?,?,?,?,?,?,?,?,?,?);",
        values,
        (err, results) => {
            if (err) {
                JSAlert.alert("Organisme référent pas ajouté erreur");
                return res.send(err);
            } else {
                JSAlert.alert("Organisme référent ajouté");
                return res.send("Organisme référent ajouté");
            }
        }
    );
});
app.get('/organismes_referents', (req, res) => {
    //code pour afficher table de la base de donnée
    db.query('SELECT * FROM organisme_referent', (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send(results);
        }
    })
});
/** Requette pour la class Réferent */
app.post('/desactiverOrganismeRef', (req, res) => {


    const {
        noOrganismeReferent
    } = req.body.selection;
    const value = [noOrganismeReferent];
    JSAlert.alert(value);
    db.query("UPDATE  organisme_referent SET etat = 'inactif' WHERE noOrganismeReferent = '" + value +
        "'",
        (err, results) => {
            if (err) {
                JSAlert.alert("L'organisme référent n'a pas été  désactivé");
                return res.send(err);
            } else {
                JSAlert.alert("L'organisme référent a été  désactivé");

                return res.send("L'organisme référent a été  désactivé");
            }
        }
    );
});

app.post('/updateOrganismeReferent', (req, res) => {
    const {
        noOrganismeReferent,
        nom,
        noCivique,
        rue,
        ville,
        province,
        codePostal,
        telephoneBureau,
        fax,
        curriel,
        siteWeb,
        etat
    } = req.body.organisme_referent;
    const values = [noOrganismeReferent, nom, noCivique, rue, ville, province, codePostal, telephoneBureau, fax, curriel, siteWeb, etat];

    JSAlert.alert(values);
    //(nom,noCivique,rue,ville,province,codePostal,telephone,fax,courriel) VALUES (?,?,?,?,?,?,?,?,?);",
    db.query('UPDATE organisme_referent SET ? WHERE ?', [{
            nom: nom,
            noCivique: noCivique,
            rue: rue,
            ville: ville,
            province: province,
            codePostal: codePostal,
            telephoneBureau: telephoneBureau,
            fax: fax,
            curriel: curriel,
            siteWeb: siteWeb,
            etat: etat

        }, {
            noOrganismeReferent: noOrganismeReferent
        }],
        (err, results) => {
            if (err) {
                JSAlert.alert("L'organisme référent n'a pas été modifier erreur");
                return res.send(err);
            } else {
                JSAlert.alert(" L'organisme à été modifié son numéro est :'" +
                    noOrganismeReferent +
                    "'");
                return res.send("L'organisme modif");
            }
        }
    );
});

/** Requette pour la class Réferent */
app.post('/addRef', (req, res) => {

    const {
        nom,
        prenom,
        titre,
        telephoneCell,
        telephoneBureau,
        fax,
        preferenceReception,
        email,
        choixOrgRef,
    } = req.body.referent;
    const values = [nom, prenom, titre, telephoneCell, telephoneBureau, fax, preferenceReception, email];
    JSAlert.alert(values);
    db.query(
        "INSERT INTO referent  (nom,prenom,titre,telephoneCell,telephoneBureau,fax,preferenceReception,email) VALUES (?,?,?,?,?,?,?,?);",
        values,
        (err, results) => {
            if (err) {
                JSAlert.alert("référent pas ajouté erreur");
                return res.send(err);
            } else {
                console.log(results.insertId);

                const numerosRefEtOrg = [choixOrgRef, results.insertId, ];
                JSAlert.alert("référent ajouté " + numerosRefEtOrg);
                db.query(
                    "INSERT INTO referent_organisme_referent  (noOrganismeReferent,noReferent) VALUES (?,?);",
                    numerosRefEtOrg,
                    (err, res) => {
                        if (err) {
                            JSAlert.alert("le lien entre le référent et l'organisme référent n'a pas été fait");
                            //return res.send(err);
                        } else {
                            JSAlert.alert("le lien entre le référent et l'organisme référent a été fait");

                            //return res.send("Référent ajouté");
                        }
                    }
                )
                return res.send("Référent ajouté" + results.noReferent);
            }
        }
    )
});

/** Requette pour la class Réferent */
app.post('/delRef', (req, res) => {


    const {
        noReferent
    } = req.body.selection;
    const value = [noReferent];
    JSAlert.alert(value);
    db.query("DELETE FROM referent WHERE noReferent = '" + value +
        "'",
        (err, results) => {
            if (err) {
                JSAlert.alert("référent n'a pas été sup erreur");
                return res.send(err);
            } else {
                JSAlert.alert("référent sup");

                return res.send("Référent sup");
            }
        }
    );
});

// Delete un employe
app.post('/delEmploye', (req, res) => {


    const {
        noEmploye
    } = req.body.selection;
    const value = [noEmploye];
    JSAlert.alert(value);
    db.query("DELETE FROM employe WHERE noEmploye = '" + value +
        "'",
        (err, results) => {
            if (err) {
                JSAlert.alert("employe n'a pas été sup erreur");
                return res.send(err);
            } else {
                JSAlert.alert("employe sup");

                return res.send("employe sup");
            }
        }
    );
});
/** Requette pour la class Réferent */
app.post('/delOrganisme', (req, res) => {


    const {
        noOrganisme
    } = req.body.selection;
    const value = [noOrganisme];
    JSAlert.alert(value);
    db.query("DELETE FROM organisme WHERE noOrganisme = '" + value +
        "'",
        (err, results) => {
            if (err) {
                JSAlert.alert("L'organisme n'a pas été sup erreur");
                return res.send(err);
            } else {
                JSAlert.alert("organisme sup");

                return res.send("organisme sup");
            }
        }
    );
});
/** Requette pour la class Réferent */
app.post('/updateRef', (req, res) => {
    const {
        noReferent,
        nom,
        prenom,
        titre,
        telephoneCell,
        telephoneBureau,
        fax,
        preferenceReception,
        email
    } = req.body.referent;
    const values = [noReferent, nom, prenom, titre, telephoneCell, telephoneBureau, fax, preferenceReception, email];
    JSAlert.alert(values);
    //(nom,prenom,titre,telephoneCell,telephoneBureau,fax,preferenceReception,email) VALUES (?,?,?,?,?,?,?,?);",
    db.query('UPDATE referent SET ? WHERE ?', [{
            nom: nom,
            prenom: prenom,
            titre: titre,
            telephoneCell: telephoneCell,
            telephoneBureau: telephoneBureau,
            fax: fax,
            preferenceReception: preferenceReception,
            email: email
        }, {
            noReferent: noReferent
        }],
        (err, results) => {
            if (err) {
                JSAlert.alert("référent n'a pas été modifier erreur");
                return res.send(err);
            } else {
                JSAlert.alert(" référent modif est :'" +
                    noReferent +
                    "'");
                return res.send("Référent modif");
            }
        }
    );
});

/** Requette pour la class Organisme */
app.post('/updateOrganisme', (req, res) => {
    const {
        noOrganisme,
        nom,
        noCivique,
        rue,
        ville,
        province,
        codePostal,
        telephone,
        fax,
        courriel

    } = req.body.organisme;
    const values = [nom, noCivique, rue, ville, province, codePostal, telephone, fax, courriel];
    JSAlert.alert(values);
    //(nom,noCivique,rue,ville,province,codePostal,telephone,fax,courriel) VALUES (?,?,?,?,?,?,?,?,?);",
    db.query('UPDATE organisme SET ? WHERE ?', [{
            nom: nom,
            noCivique: noCivique,
            rue: rue,
            ville: ville,
            province: province,
            codePostal: codePostal,
            telephone: telephone,
            fax: fax,
            courriel: courriel
        }, {
            noOrganisme: noOrganisme
        }],
        (err, results) => {
            if (err) {
                JSAlert.alert("L'organisme n'a pas été modifier erreur");
                return res.send(err);
            } else {
                JSAlert.alert(" L'organisme modif est :'" +
                    noOrganisme +
                    "'");
                return res.send("L'organisme modif");
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

    const {
        recherche
    } = req.body.recherche_referent;
    const values = [recherche, recherche, recherche, recherche, recherche, recherche, recherche, recherche, recherche];

    db.query(
        'SELECT REF.* ' +
        'FROM `referent` REF ' +
        'LEFT JOIN `referent_organisme_referent` REF_OREF ON REF_OREF.noReferent = REF.noReferent ' +
        'LEFT JOIN `organisme_referent` OREF ON REF_OREF.noOrganismeReferent = OREF.noOrganismeReferent ' +
        'LEFT JOIN `organisme_organisme_referent` ORG_OREF ON ORG_OREF.noOrganismeReferent = OREF.noOrganismeReferent ' +
        'LEFT JOIN `organisme` ORG ON ORG.noOrganisme = ORG_OREF.noOrganisme ' +
        'LEFT JOIN `dossier` D ON D.organisme = ORG.noOrganisme ' +
        'WHERE REF.nom LIKE CONCAT(\'%\', ?, \'%\') OR REF.prenom LIKE CONCAT(\'%\', ?, \'%\') OR ORG.nom LIKE CONCAT(\'%\', ?, \'%\') ' +
        '  OR REF.titre LIKE CONCAT(\'%\', ?, \'%\') OR REF.telephoneCell LIKE CONCAT(\'%\', ?, \'%\') ' +
        '  OR REF.telephoneBureau LIKE CONCAT(\'%\', ?, \'%\') OR ORG.telephone LIKE CONCAT(\'%\', ?, \'%\') ' +
        '  OR OREF.telephoneBureau LIKE CONCAT(\'%\', ?, \'%\') OR D.noDossierFamille = ?', values, (err, results) => {
            if (err) {
                return res.send(err);
            } else {
                return res.send(results);
            }
        })
});

app.listen(PORT, err => {
    if (err) throw err;
    console.log('Server start on port:' + PORT + '!');
});

module.exports = server;