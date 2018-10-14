import React from 'react';
import axios from 'axios';

export default class AddEmploye extends React.Component{
    state ={
        //noEmploye:'',
        nom:'',
        prenom:'',
        telephone:'',
        motDePasse:'',
        role:'',
    };

    handleChangeNom = event =>{
        this.setState({nom:event.target.value});
    };
    handleChangePrenom = event =>{
        this.setState({prenom:event.target.value});
    };
    handleChangeTelephone = event =>{
        this.setState({telephone:event.target.value});
    };
    handleChangeMotDePasse = event =>{
        this.setState({motDePasse:event.target.value});
    };
    handleChangeRole = event =>{
        this.setState({role:event.target.value});
    };
    handleSumit = event=>{
        event.preventDefault();

        const employe ={
            //noEmploye: this.state.noEmploye,
            nom: this.state.nom,
            prenom: this.state.prenom,
            telephone: this.state.telephone,
            motDePasse: this.state.motDePasse,
            role: this.state.role,
        }

        axios.post('/addEmploye',{ employe })
        .then(res=>{
            console.log(res);
            console.log(res.data);
        });
    };

    render(){
        return(
            <form onSubmit={this.handleSumit}>
                <h2>Ajouter employe</h2>
                <label>
                    Nom de l'employe:
                    <input type="text" name="nom" onChange={this.handleChangeNom}/>
                </label>
                <br/>
                <label>
                    Prenom l'employe:
                    <input type="text" name="prenom" onChange={this.handleChangePrenom}/>
                </label>
                <br/>
                <label>
                    Telephone de l'employe:
                    <input type="text" name="telephone" onChange={this.handleChangeTelephone}/>
                </label>
                <br/>
                <label>
                    Mot de passe de l'employe:
                    <input type="text" name="motDePasse" onChange={this.handleChangeMotDePasse}/>
                </label>
                <br/>
                <select name='role' onChange={this.handleChangeRole}>
                    <option>Choisir un role</option>
                    <option value='1'>Directeur</option>
                    <option value='2'>Coordennateur</option>
                    <option value='3'>Adjoint-Coordennateur</option>
                    <option value='4'>Intervenant</option>
                </select>
                <br/>
                <button type='submit'>Save</button>
            </form>
        );
    }
}