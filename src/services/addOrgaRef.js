import React from 'react';
import axios from 'axios';

export default class addOrgaRef extends React.Component{
    state ={
        //noOrganismeReferent:'',
        nom:'',
        noCivique:'',
        rue:'',
        ville:'',
        province:'',
        codePostal:'',
        telephoneBureau:'',
        fax:'',
        courriel:'',
        siteWeb:'',
        etat:'',
    };

    handleChangeNom = event =>{
        this.setState({nom:event.target.value});
    };
    handleChangeNoCivique = event =>{
        this.setState({noCivique:event.target.value});
    };
    handleChangeRue = event =>{
        this.setState({rue:event.target.value});
    };
    handleChangeVille = event =>{
        this.setState({ville:event.target.value});
    };
    handleChangeProvince = event =>{
        this.setState({province:event.target.value});
    };
    handleChangeCodePostal = event =>{
        this.setState({codePostal:event.target.value});
    };
    handleChangeTelephoneBureau = event =>{
        this.setState({telephoneBureau:event.target.value});
    };
    handleChangeFax = event =>{
        this.setState({fax:event.target.value});
    };
    handleChangeCourriel = event =>{
        this.setState({courriel:event.target.value});
    };
    handleChangeSiteWeb = event =>{
        this.setState({siteWeb:event.target.value});
    };
    handleChangeEtat = event =>{
        this.setState({etat:event.target.value});
    };
    handleSumit = event=>{
        event.preventDefault();

        const organisme_referent ={
            //noEmploye: this.state.noEmploye,
            nom: this.state.nom,
            noCivique: this.state.noCivique,
            rue: this.state.rue,
            ville: this.state.ville,
            province: this.state.province,
            codePostal: this.state.codePostal,
            telephoneBureau: this.state.telephoneBureau,
            fax: this.state.fax,
            courriel: this.state.courriel,
            siteWeb: this.state.siteWeb,
            etat: this.state.etat,
        }

        axios.post('/addOrgaRef',{ organisme_referent })
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
