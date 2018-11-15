import React from 'react';
import { Link } from 'react-router-dom'
import { Checkbox, Input, Icon, Header, Divider, Select, TextArea } from 'semantic-ui-react'
import { Form, Button, Dropdown, Menu } from "semantic-ui-react";
import axios from 'axios';
import EmployeForm from '../basicForms/EmployeForm';

export default class AddEmployeForm extends React.Component {
    state = {
        nom: '',
        prenom: '',
        noCivique:'',
        rue:'',
        ville:'',
        province:'',
        codePostal:'',
        cellulaire: '',
        maison: '',
        bureau: '',
        courriel:'',
        formation:'',
        dateformation:'',
        motDePasse: '',
        role: '',
        render: false,
        switchRefPage: false,
    };


    handleChangeNom = event => {
        this.setState({
            nom: event.target.value,
            // pour que le message ne s'affiche qu'une fois
            pass: true
        });

    };
    handleChangePrenom = event => {
        this.setState({ prenom: event.target.value });
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
    handleChangeCellulaire = event => {
        this.setState({ cellulaire: event.target.value });
    };
    handleChangeMaison = event => {
        this.setState({ maison: event.target.value });
    };
    handleChangeBureau = event => {
        this.setState({ bureau: event.target.value });
    };
    handleChangeCourriel = event => {
        this.setState({ courriel: event.target.value });
    };
    handleChangeFormation = event => {
        this.setState({ formation: event.target.value });
    };
    handleChangeDateFormation = event => {
        this.setState({ dateformation: event.target.value });
    };
    handleChangeMotDePasse = event => {
        this.setState({ motDePasse: event.target.value });
    };
    handleChangeRole = event => {
        this.setState({ role: event.target.value });
    };
    handleSubmit = event => {
        event.preventDefault();

        const employe = {


            noEmploye: this.props.modifierEmp,
            nom: this.state.nom,
            prenom: this.state.prenom,
            noCivique: this.state.noCivique,
            rue: this.state.rue,
            ville: this.state.ville,
            province: this.state.province,
            codePostal: this.state.codePostal,
            cellulaire: this.state.cellulaire,
            maison: this.state.maison,
            bureau: this.state.bureau,
            courriel: this.state.courriel,
            formation: this.state.formation,
            dateformation: this.state.dateformation,
            motDePasse: this.state.motDePasse,
            role: this.state.role,
        }

        /* axios.post('/addEmploye',{ employe })
        .then(res=>{
            console.log(res);
            console.log(res.data);
        });

        setTimeout(
            function () { //Start the timer
            this.setState({
                render: true
            }) //After 1 second, set render to true
        }.bind(this), 1000)
        this.setState({
            switchRefPage : true
        });

    }; */

        if (this.props.modifierEmp != null) {
            axios.post('/updateEmploye', { employe })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
        } else {
            axios.post('/addEmploye', {
                employe
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

    render() {

        // variable possèdent le choix fait dans
        //UpdateOrganismeForm
        var employeChoisi = this.props.modifierEmp

        var messageAEteAffiche = this.state.pass


        //la redirection a cette page a été faite par UpdateOrganismeForm
        //on peut modifier l'organisme choisi
        if (employeChoisi != null && !messageAEteAffiche) {
            alert("L'employe modifié sera :" + this.props.modifierEmp)

        }

        //redirection apres l'ajout ou la modification
        if (this.state.switchRefPage) {
            return (< EmployeForm />)
        }
        return (
            <Form onSubmit={this.handleSubmit}>
              <Divider horizontal>Identité</Divider>
              <Form.Group widths='equal'>
                <Form.Field>
                    <label>
                        Nom:
                        <input type="text" name="nom" onChange={this.handleChangeNom} />
                    </label>
                </Form.Field>
                <br />
                <Form.Field>
                    <label>
                        Prenom:
                        <input type="text" name="prenom" onChange={this.handleChangePrenom} />
                    </label>
                </Form.Field>
              </Form.Group>
              <br/>
                <Divider horizontal>Adresse</Divider>
                <Form.Group widths='equal'>
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
                </Form.Group>
              <br/>
                <Divider horizontal>Télephones</Divider>
                <Form.Group widths='equal'>
                <Form.Field>
                    <label>
                        Cellulaire:
                        <input type="text" name="cellulaire" onChange={this.handleChangeCellulaire} />
                    </label>
                </Form.Field>
                <br />
                <Form.Field>
                    <label>
                        Maison:
                        <input type="text" name="maison" onChange={this.handleChangeMaison} />
                    </label>
                </Form.Field>
                <br />
                <Form.Field>
                    <label>
                        Bureau:
                        <input type="text" name="bureau" onChange={this.handleChangeBureau} />
                    </label>
                </Form.Field>
                </Form.Group>
                <br />
                <Divider horizontal>Formations</Divider>
                <Form.Group widths='equal' onSubmit={this.handleAdd}>
                <Form.Field>
                    <label>
                        Nom de la formation :
                        <input type="text" name="formation" onChange={this.handleChangeFormation} />
                    </label>
                </Form.Field>
                <br />
                <Form.Field>
                    <label>
                        Date d'optention du diplôme:
                        <input type="text" name="dateformation" placeholder='AAAA-MM-JJ' onChange={this.handleChangeDateFormation} />
                    </label>
                </Form.Field>
                </Form.Group>
                <br />
                <Divider horizontal>Compte utilisateur</Divider>
                <Form.Group widths='equal'>
                <Form.Field>
                    <label>
                        Courriel:
                        <input type="text" name="courriel" onChange={this.handleChangeCourriel} />
                    </label>
                </Form.Field>
                <br />
                <Form.Field>
                    <label>
                        Mot de passe:
                        <input type="text" name="motDePasse" onChange={this.handleChangeMotDePasse} />
                    </label>
                </Form.Field>
                </Form.Group>
                <br />
                <Form.Field>
                    <select name='role' placeholder="Choisir un role" onChange={this.handleChangeRole}>
                        <option selected>Choisir un rôle</option>
                        <option value='1'>Directeur</option>
                        <option value='2'>Coordonnateur</option>
                        <option value='3'>Adjoint-Coordennateur</option>
                        <option value='4'>Intervenant</option>
                    </select>
                </Form.Field>
                <br />
                <Button> Enregistrer </Button >
            </Form>

        );
    }
}
