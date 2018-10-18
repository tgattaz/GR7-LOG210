import React from 'react';
import axios from 'axios';

export default class AddOrganisme extends React.Component{
    state ={
        //noEmploye:'',
        nom:'',
        noCivique:'',
        rue:'',
        ville:'',
        province:'',
        codePostal:'',
        telephone:'',
        fax:'',
        courriel:'',
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
    handleChangeTelephone = event =>{
        this.setState({telephone:event.target.value});
    };
    handleChangeCourriel = event =>{
        this.setState({courriel:event.target.value});
    };
    handleChangeFax = event =>{
        this.setState({fax:event.target.value});
    };
    handleSumit = event=>{
        event.preventDefault();

        const organisme ={
            //noEmploye: this.state.noEmploye,
            nom:this.state.nom,
            noCivique:this.state.noCivique,
            rue:this.state.rue,
            ville:this.state.ville,
            province:this.state.province,
            codePostal:this.state.codePostal,
            telephone:this.state.telephone,
            fax:this.state.fax,
            courriel:this.state.courriel,
        }

        axios.post('/addOrganisme',{ organisme })
        .then(res=>{
            console.log(res);
            console.log(res.data);
        });
    };

    render(){
        return(
            <form onSubmit={this.handleSumit}>
                <h2>Ajouter organisme</h2>
                <label>
                    Nom de l'organisme:
                    <input type="text" name="nom" onChange={this.handleChangeNom}/>
                </label>
                <h3>Adresse</h3>
                <label>
                    Numéro civique :
                    <input type="text" name="noCivique" onChange={this.handleChangeNoCivique}/>
                </label>
                <br/>
                <label>
                    Rue:
                    <input type="text" name="rue" onChange={this.handleChangeRue}/>
                </label>
                <br/>
                <label>
                    Ville:
                    <input type="text" name="ville" onChange={this.handleChangeVille}/>
                </label>
                <br/>
                <label>
                    Province:
                    <input type="text" name="province" onChange={this.handleChangeProvince}/>
                </label>
                <br/>
                <label>
                    Code postal:
                    <input type="text" name="codePostal" onChange={this.handleChangeCodePostal}/>
                </label>
                <br/>
                <label>
                    Telephone de l'employe:
                    <input type="text" name="telephone" onChange={this.handleChangeTelephone}/>
                </label>
                <br/>
                <label>
                    Numéro de fax:
                    <input type="text" name="fax" onChange={this.handleChangeFax}/>
                </label>
                <br/>
                <label>
                    Courriel de l'organisme:
                    <input type="text" name="courriel" onChange={this.handleChangeCourriel}/>
                </label>
                <br/>
                <button type='submit'>Save</button>
            </form>
        );
    }
}