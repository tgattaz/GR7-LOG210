import React from 'react';
import { Form, Button } from "semantic-ui-react";
import axios from 'axios';
import ServiceForm from '../basicForms/ServiceForm';

export default class AddServiceForm extends React.Component{
    state ={
        data: {
        nomService:'',
        tarificationParent:'',
        tarificationSubventionnee:'',
        tarificationCiss:'',
        etatDuService:''
        },
        noServiceAModifier: '',
        pass: false,
        switchServicePage: false,
    }; 
    onChange = e => {
        this.setState({
        
        data:{ ...this.state.data,[e.target.name]: e.target.value},
        pass: true
    })
    
   console.log(this.state.data.nomService)
};

    handleChangeNom = event =>{
        this.setState({nom:event.target.value,
         // pour que le message ne s'affiche qu'une fois 
         
        });
    };
    handleSumit = event=>{
        event.preventDefault();

        const service ={
            nomService:this.state.data.nomService,
            noPointDeService: this.props.choixPointService,
            tarificationParent:this.state.data.tarificationParent,
            tarificationSubventionnee:this.state.data.tarificationSubventionnee,
            tarificationCiss:this.state.data.tarificationCiss,
            etatDuService:this.state.data.etatDuService,
        }

        if (this.props.noServiceAModifier != null) {
        axios.post('/updateService',{ service })
        .then(res=>{
            console.log(res);
            console.log(res.data);
        })}else{
            axios.post('/addService', {service})
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
        }
        this.setState({
            switchServicePage: true
        })
    };

    render(){
        // variable possèdent le choix fait dans 
        //UpdateServiceForm 
        var serviceChoisi = this.props.noServiceAModifier

        var messageAEteAffiche = this.state.pass


        //la redirection a cette page a été faite par UpdateServiceForm
        //on peut modifier le service choisi
        if (serviceChoisi != null && !messageAEteAffiche) {
            alert(" VOICI UN EXEMPLE DE PROPS DE PointDeServiceSelection à AddSelectionForm ,ON PASSE DES VALEURS ENTRE LES CLASSES :), Le service modifié sera :" + this.props.noServiceAModifier)

        }
        

        //redirection apres l'ajout ou la modification 
        if (this.state.switchServicePage) {
            return ( < ServiceForm /> )
        }


        return(
          <Form onSubmit={this.handleSumit}>
              <Form.Field>
                <label>
                    Nom du service:
                    <input type="text" name="nomService" onChange={this.onChange}/>
                </label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label>
                    Tarification du parent:
                    <input type="text" name="tarificationParent" onChange={this.onChange}/>
                </label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label>
                    Tarification subventionnée:
                    <input type="text" name="tarificationSubventionnee" onChange={this.onChange}/>
                </label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label>
                    Tarification pour le CISSS:
                    <input type="text" name="tarificationCiss" onChange={this.onChange}/>
                </label>
              </Form.Field>
             
              <br />
                <Form.Field>
                    <select name="etatDuService" placeholder="Choisir un état" onChange={this.onChange}>
                        <option>Choisir un état</option>
                        <option value='actif'>Actif</option>
                        <option value='inactif'>Inactif</option>
                    </select>
                </Form.Field>
              <br/>
              <Button primary>Enregistrer</Button>
          </Form>
        );
    }
}
