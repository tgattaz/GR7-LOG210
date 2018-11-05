import React from 'react';
import {Link} from 'react-router-dom'
import { Form, Button ,Dropdown, Menu} from "semantic-ui-react";
import axios from 'axios';
import EmployeForm from '../basicForms/EmployeForm';

export default class AddEmployeForm extends React.Component{
    state ={
        nom:'',
        prenom:'',
        telephone:'',
        motDePasse:'',
        role:'',
        render: false,
        switchRefPage : false,
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

        setTimeout(
            function () { //Start the timer
            this.setState({
                render: true
            }) //After 1 second, set render to true
        }.bind(this), 1000)
        this.setState({
            switchRefPage : true
        });

    };

    render(){
        //redirection apres l'ajout ou la modification 
        if (this.state.switchRefPage) {
            return ( < EmployeForm /> )
        }
        return(
            <Form onSubmit={this.handleSumit}>
                <Form.Field>
                    <label>
                        Nom de l'employe:
                        <input type="text" name="nom" onChange={this.handleChangeNom}/>
                    </label>
                </Form.Field>
                <br/>
                <Form.Field>
                    <label>
                        Prenom l'employe:
                        <input type="text" name="prenom" onChange={this.handleChangePrenom}/>
                    </label>
                </Form.Field>
                <br/>
                <Form.Field>
                    <label>
                        Telephone de l'employe:
                        <input type="text" name="telephone" onChange={this.handleChangeTelephone}/>
                    </label>
                </Form.Field>
                <br/>
                <Form.Field>
                    <label>
                        Mot de passe de l'employe:
                        <input type="text" name="motDePasse" onChange={this.handleChangeMotDePasse}/>
                    </label>
                </Form.Field>
                <br/>
                <Form.Field>
                    <select name='role' placeholder="Choisir un role" onChange={this.handleChangeRole}>
                        <option selected>Choisir</option>
                        <option value='1'>Directeur</option>
                        <option value='2'>Coordennateur</option>
                        <option value='3'>Adjoint-Coordennateur</option>
                        <option value='4'>Intervenant</option>
                    </select>
                </Form.Field>
                <br/>
                < Button > Enregistrer </Button >
            </Form>
           
        );
    }
}