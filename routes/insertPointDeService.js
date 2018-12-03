import express from "express";
var db = require('../BD/database');
const router = express.Router();

router.post('/',(req,res)=>{
    const {
        nom,
        noCivique,
        rue,
        ville,
        province,
        codePostal,
        telephone,
        fax,
        courriel,
        idOrga
    } = req.body.info;
    
    const values = 
        [nom,
        noCivique,
        rue,
        ville,
        province,
        codePostal,
        telephone,
        fax,
        courriel,
        idOrga];
    db.query("INSERT INTO point_de_service (nom, noCivique,rue,ville,province,codePostal,telephone,courriel,fax,noOrganisme) VALUES (?,?,?,?,?,?,?,?,?,?);", values, (err,resultats) => {
        if (err) {
            return res.send(err);
        } else {
            res.send('point de service ajouté')
        }
    })
})

export default router;