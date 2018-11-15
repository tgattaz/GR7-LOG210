import express from "express";
import jwt from 'jsonwebtoken';
var db = require('../BD/database');
const router = express.Router();

router.post('/',(req,res)=>{
    
    const { info } = req.body;
    console.log(info.id+' et '+info.type);

    db.query('SELECT * FROM organisme where noOrganisme=?',[info.id],(err,results)=>{
        if(err){
            res.status(400).json({ errors: { global: "Champs invalides"}});
        }
        if(results.length>0){
            switch(info.type){
                case 'pointDeService':
                    res.json({organisme: {
                        noOrganisme: results[0].noOrganisme,
                        nom: results[0].nom
                            }
                        }
                    );
                break;
                case 'addEmploye':
                    res.json({organisme: {
                        noOrganisme: results[0].noOrganisme,
                        nom: results[0].nom
                            }
                        }
                    );
                break;
                case 'modif': 

                break;
                case 'sup':

                break;
                default:
            }
                    
                }
                else{
                    res.status(400).json({ errors: { global: "Champs invalides"}});
                }
            });
    
    /*db.query('SELECT * FROM organisme where noOrganisme=?',[data.id],(err,results)=>{
        if(err){
            res.status(400).json({ errors: { global: "Champs invalides"}});
        }
        if(results.length>0){
            res.json({user: {
                        noOrganisme: id,
                        nom: results[0].nom,
                        courriel: results[0].courriel,
                    }
                }
            );
        }
        else{
            res.status(400).json({ errors: { global: "Champs invalides"}});
        }
    });*/
})


export default router;