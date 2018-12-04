import express from "express";
import jwt from 'jsonwebtoken';
var db = require('../BD/database');
const router = express.Router();

router.post('/',(req,res)=>{
    
    const { credentials } = req.body;
    
    db.query('SELECT * FROM employe where prenom=? and motDePasse=?',[credentials.prenom,credentials.password],(err,results)=>{
        if(err){
            res.status(400).json({ errors: { global: "Champs invalides"}});
        }
        if(results.length>0){
            res.json({user: {
                        prenom:credentials.prenom,
                        role: results[0].role,
                        noEmploye: results[0].noEmploye, 
                        token:jwt.sign({
                            prenom:credentials.prenom
                        },process.env.JWT_SECRET)
                    }
                }
            );
        }
        else{
            res.status(400).json({ errors: { global: "Champs invalides"}});
        }
    });
})


export default router;