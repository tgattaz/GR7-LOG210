import React, {
  lazy,
  Suspense
} from 'react';
import { Form, Button, Dropdown } from "semantic-ui-react";
import axios from 'axios';
import RefForm from '../basicForms/RefForm';


export default class AddRefForm extends React.Component {
  state = {
    nom: '',
    prenom: '',
    titre: '',
    fax: '',
    telephoneCell: '',
    telephoneBureau: '',
    email: '',
    preferenceReception: '',
    noRefAModifier : '',
    pass: false,
    switchRefPage : false,
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
  handleChangeTitre = event => {
    this.setState({ titre: event.target.value });
  };
  handleChangeFax = event => {
    this.setState({ fax: event.target.value });
  };
  handleChangeTelCell = event => {
    this.setState({ telephoneCell: event.target.value });
  };
  handleChangeTelBureau = event => {
    this.setState({ telephoneBureau: event.target.value });
  };
  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  };
  handleChangePreference = event => {
    this.setState({ preferenceReception: event.target.value });
  };

  handleSumit = event => {
    event.preventDefault();

    const referent = {
      noReferent: this.props.modifierRef,
      nom: this.state.nom,
      prenom: this.state.prenom,
      titre: this.state.titre,
      fax: this.state.fax,
      telephoneCell: this.state.telephoneCell,
      telephoneBureau: this.state.telephoneBureau,
      preferenceReception: this.state.preferenceReception,
      email: this.state.email,
      choixOrgRef: this.props.choixOrgRef,
    };

    
    if (this.props.modifierRef != null) {
       axios.post('/updateRef', {
            referent
   }).then(res => {
     console.log(res);
     console.log(res.data);
   })
    }else{
       axios.post('/addRef', { referent })
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
    //ces variables possèdent les choixs fait dans 
    //UpdateRefForm ou OrgaRefSelection
    var orgaRef = this.props.choixOrgRef
    var refChoisi = this.props.modifierRef
    var messageAEteAffiche = this.state.pass


    //la redirection a cette page a été faite par OrgaRefSelection
    //on peut lier le reférent a sont organisme referent
    if (orgaRef != null && !messageAEteAffiche) {
      alert(" VOICI UN EXEMPLE DE PROPS DE OrgaRefSelection à AddRefForm ,ON PASSE DES VALEURS ENTRE LES CLASSES :), L'orga ref choisi pour add cette employé est :" + this.props.choixOrgRef)

    }
    //la redirection a cette page a été faite par UpdateRefForm
    //on peut modifier le reférent choisi
    if (refChoisi != null && !messageAEteAffiche) {
      alert(" VOICI UN EXEMPLE DE PROPS DE UpdateRefForm à AddRefForm  ,ON PASSE DES VALEURS ENTRE LES CLASSES :), Le ref modifié sera :" + this.props.modifierRef)
    }

    //redirection apres l'ajout ou la modification 
    if (this.state.switchRefPage) {
      return ( <RefForm/>
      )}return ( < Form onSubmit = {
            this.handleSumit
          } >
          <
          Form.Field >
          <
          label >
          Nom du référent:
          <
          input type = "text"
          name = "nom"
          onChange = {
            this.handleChangeNom
          }
          /> <
          /label> <
          /Form.Field> <
          br / >
          <
          Form.Field >
          <
          label >
          Prenom du référent:
          <
          input type = "text"
          name = "prenom"
          onChange = {
            this.handleChangePrenom
          }
          /> <
          /label> <
          /Form.Field> <
          br / >
          <
          Form.Field >
          <
          label >
          Le titre du référent:
          <
          input type = "text"
          name = "titre"
          onChange = {
            this.handleChangeTitre
          }
          /> <
          /label> <
          /Form.Field> <
          br / >
          <
          Form.Field >
          <
          label >
          Le telephone cellulaire du référent:
          <
          input type = "text"
          name = "telephoneCell"
          onChange = {
            this.handleChangeTelCell
          }
          /> <
          /label> <
          /Form.Field> <
          br / >
          <
          Form.Field >
          <
          label >
          Le telephone de bureau du référent:
          <
          input type = "text"
          name = "telephoneBureau"
          onChange = {
            this.handleChangeTelBureau
          }
          /> <
          /label> <
          /Form.Field> <
          br / >
          <
          Form.Field >
          <
          label >
          Le email du référent:
          <
          input type = "text"
          name = "email"
          onChange = {
            this.handleChangeEmail
          }
          /> <
          /label> <
          /Form.Field> <
          br / >
          <
          Form.Field >
          <
          label >
          Le fax du référent:
          <
          input type = "text"
          name = "fax"
          onChange = {
            this.handleChangeFax
          }
          /> <
          /label> <
          /Form.Field> <
          br / >
          <
          Form.Field >
          <
          select name = "preferenceReception"
          placeholder = "Choisir une préférence"
          onChange = {
            this.handleChangePreference
          } >
          <
          option selected > Choisir < /option> <
          option value = "1" > Fax < /option> <
          option value = "2" > Email < /option> <
          option value = "3" > Papier < /option> <
          /select> <
          /Form.Field> <
          br / >
          <
          Button primary > Enregistrer < /Button> <
          /Form>
        )
    }
}