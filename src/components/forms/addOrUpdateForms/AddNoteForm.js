import React from "react";
import { Form, Button, Dropdown } from "semantic-ui-react";
import axios from "axios";
import { Redirect } from "react-router";
import NoteForm from "../basicForms/NoteForm";

export default class AddNoteForm extends React.Component {
  state = {
    nomIntervenant: "",
    noFamilleChoisi: "",
    message: "",
    nomPersonneConcerne: "",
    date: "",
    noNoteAModifier: "",
    pass: false,
    switchNotePage: false
  };

  handleChangeNomIntervenant = event => {
    this.setState({
      nomIntervenant: event.target.value,
      // pour que le message ne s'affiche qu'une fois
      pass: true
    });
  };
  handleChangeMessage = event => {
    this.setState({ message: event.target.value });
  };
  handleChangeNomPersonneConcerne = event => {
    this.setState({ nomPersonneConcerne: event.target.value });
  };

  handleSumit = event => {
    event.preventDefault();

    const note = {
      noNote: this.props.modifierNote,
      nomIntervenant: this.state.nomIntervenant,
      nomPersonneConcerne: this.state.nomPersonneConcerne,
      message: this.state.message,
      noFamilleChoisi: this.props.choixFamille
    };

    if (this.props.modifierNote != null) {
      axios
        .post("/updateNote", {
          note
        })
        .then(res => {
          console.log(res);
          console.log(res.data);
        });
    } else {
      axios.post("/addNote", { note }).then(res => {
        console.log(res);
        console.log(res.data);
      });
    }

    this.setState({
      switchRefPage: true
    });
  };

  render() {
    //ces variables possèdent les choixs fait dans
    //UpdateNoteForm ou NoteSelection
    var famille = this.props.choixFamille;
    var noteChoisi = this.props.modifierNote;
    var messageAEteAffiche = this.state.pass;

    //la redirection a cette page a été faite par RechercherFamilleForm
    //on peut lier la note a sont organisme referent
    if (famille != null && !messageAEteAffiche) {
      alert(
        " VOICI UN EXEMPLE DE PROPS DE RechercherFamilleForm à AddNoteForm ,ON PASSE DES VALEURS ENTRE LES CLASSES , Le numero de famille choisi pour ajouter cette note est :" +
          this.props.choixFamille
      );
    }
    //la redirection a cette page a été faite par UpdateNoteForm
    //on peut modifier la note choisi
    if (noteChoisi != null && !messageAEteAffiche) {
      alert(
        " VOICI UN EXEMPLE DE PROPS DE UpdateNoteForm à AddNoteForm  ,ON PASSE DES VALEURS ENTRE LES CLASSES, La note modifié sera :" +
          this.props.modifierNote
      );
    }

    //redirection apres l'ajout ou la modification
    if (this.state.switchRefPage) {
      return <NoteForm />;
    }
    return (
      <Form onSubmit={this.handleSumit}>
        <Form.Field>
          <label>
            Nom de l'intervenant concerné:
            <input
              type="text"
              name="nomIntervenant"
              onChange={this.handleChangeNomIntervenant}
            />
          </label>
        </Form.Field>
        <br />
        <Form.Field>
          <label>
            Nom de la personne pour qui cette note est destinée:
            <input
              type="text"
              name="message"
              onChange={this.handleChangeMessage}
            />
          </label>
        </Form.Field>
        <br />
        <Form.Field>
          <label>
            Nom de la personne concerné:
            <input
              type="text"
              name="nomPersonneConcerne"
              onChange={this.handleChangeNomPersonneConcerne}
            />
          </label>
        </Form.Field>
        <Button primary> Enregistrer </Button>
      </Form>
    );
  }
}
