import React from 'react';
import axios from 'axios';

export default class AddOrgaRef extends React.Component{
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
            //noOrganismeReferent: this.state.noOrganismeReferent,
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
                <h2>Ajouter organisation réferent</h2>
                <label>
                    Nom de l'organisation:
                    <input type="text" name="nom" onChange={this.handleChangeNom}/>
                </label>
                <br/>
                <label>
                    Numéro Civique:
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
                    Code Postal:
                    <input type="text" name="codePostal" onChange={this.handleChangeCodePostal}/>
                </label>
                <br/>
                <label>
                    Télephone Bureau:
                    <input type="text" name="telephoneBureau" onChange={this.handleChangeTelephoneBureau}/>
                </label>
                <br/>
                <label>
                    Fax:
                    <input type="text" name="fax" onChange={this.handleChangeFax}/>
                </label>
                <br/>
                <label>
                    Courriel:
                    <input type="text" name="courriel" onChange={this.handleChangeCourriel}/>
                </label>
                <br/>
                <label>
                    Site Internet:
                    <input type="text" name="siteWeb" onChange={this.handleChangeSiteWeb}/>
                </label>
                <br/>
                <label>
                    Etat:
                    <input type="text" name="etat" onChange={this.handleChangeEtat}/>
                </label>
                <br/>
                <button type='submit'>Save</button>
            </form>
        );
    }
}
