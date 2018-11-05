import React from 'react';
import { Form, Button } from "semantic-ui-react";
import axios from 'axios';
import OrganismeForm from '../basicForms/OrganismeForm';

export default class AddOrganismeForm extends React.Component{
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
        noRefAModifier: '',
        pass: false,
        switchRefPage: false,
    };

    handleChangeNom = event =>{
        this.setState({nom:event.target.value,
         // pour que le message ne s'affiche qu'une fois 
         pass: true
        });
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
            noOrganisme: this.props.modifierOrga,
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

        if (this.props.modifierOrga != null) {
        axios.post('/updateOrganisme',{ organisme })
        .then(res=>{
            console.log(res);
            console.log(res.data);
        })}else{
            axios.post('/addOrganisme', {
                    organisme
                })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
        }
        this.setState({
            switchRefPage: true
        })
    };

    render(){
        // variable possèdent le choix fait dans 
        //UpdateOrganismeForm 
        var organismeChoisi = this.props.modifierOrga

        var messageAEteAffiche = this.state.pass


        //la redirection a cette page a été faite par UpdateOrganismeForm
        //on peut modifier l'organisme choisi
        if (organismeChoisi != null && !messageAEteAffiche) {
            alert(" VOICI UN EXEMPLE DE PROPS DE OrgaRefSelection à AddRefForm ,ON PASSE DES VALEURS ENTRE LES CLASSES :), L'organisme modifié sera :" + this.props.modifierOrga)

        }
        

        //redirection apres l'ajout ou la modification 
        if (this.state.switchRefPage) {
            return ( < OrganismeForm /> )
        }


        return(
          <Form onSubmit={this.handleSumit}>
              <Form.Field>
                <label>
                    Nom de l organisation:
                    <input type="text" name="nom" onChange={this.handleChangeNom}/>
                </label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label>
                    Numéro Civique:
                    <input type="text" name="noCivique" onChange={this.handleChangeNoCivique}/>
                </label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label>
                    Rue:
                    <input type="text" name="rue" onChange={this.handleChangeRue}/>
                </label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label>
                    Ville:
                    <input type="text" name="ville" onChange={this.handleChangeVille}/>
                </label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label>
                    Province:
                    <input type="text" name="province" onChange={this.handleChangeProvince}/>
                </label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label>
                    Code Postal:
                    <input type="text" name="codePostal" onChange={this.handleChangeCodePostal}/>
                </label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label>
                    Télephone Bureau:
                    <input type="text" name="telephoneBureau" onChange={this.handleChangeTelephone}/>
                </label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label>
                    Fax:
                    <input type="text" name="fax" onChange={this.handleChangeFax}/>
                </label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label>
                    Courriel:
                    <input type="text" name="courriel" onChange={this.handleChangeCourriel}/>
                </label>
              </Form.Field>
              <br/>
              <Button primary>Enregistrer</Button>
          </Form>
        );
    }
}
