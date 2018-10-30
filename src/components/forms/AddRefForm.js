import React from 'react';
import { Form, Button, Dropdown } from "semantic-ui-react";
import axios from 'axios';

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
  };

  handleChangeNom = event => {
    this.setState({ nom: event.target.value });
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
  handleChangeCouriel = event => {
    this.setState({ email: event.target.value });
  };
  handleChangePreference = event => {
    this.setState({ preferenceReception: event.target.value });
  };
  handleSumit = event => {
    event.preventDefault();

    const referent = { nom: this.state.nom, prenom: this.state.prenom, titre: this.state.titre, fax: this.state.fax, telephoneCell: this.state.telephoneCell, telephoneBureau: this.state.telephoneBureau, preferenceReception: this.state.preferenceReception, couriel: this.state.couriel };

    axios.post('/addRef', { referent })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return <Form onSubmit={this.handleSumit}>
        <Form.Field>
          <label>
            Nom du référent:
            <input type="text" name="nom" onChange={this.handleChangeNom} />
          </label>
        </Form.Field>
        <br />
        <Form.Field>
          <label>
            Prenom du référent:
            <input type="text" name="prenom" onChange={this.handleChangePrenom} />
          </label>
        </Form.Field>
        <br />
        <Form.Field>
          <label>
            Le titre du référent:
            <input type="text" name="titre" onChange={this.handleChangeTitre} />
          </label>
        </Form.Field>
        <br />
        <Form.Field>
          <label>
            Le telephone cellulaire du référent:
            <input type="text" name="telephoneCell" onChange={this.handleChangeTelCell} />
          </label>
        </Form.Field>
        <br />
        <Form.Field>
          <label>
            Le telephone de bureau du référent:
            <input type="text" name="telephoneBureau" onChange={this.handleChangeTelBureau} />
          </label>
        </Form.Field>
        <br />
        <Form.Field>
          <label>
            Le couriel du référent:
            <input type="text" name="couriel" onChange={this.handleChangeCouriel} />
          </label>
        </Form.Field>
        <br />
        <Form.Field>
          <label>
            Le fax du référent:
            <input type="text" name="fax" onChange={this.handleChangeFax} />
          </label>
        </Form.Field>
        <br />
        <Form.Field>
          <select name="preferenceReception" placeholder="Choisir une préférence" onChange={this.handleChangePreference}>
            <option selected>Choisir</option>
            <option value="1">Fax</option>
            <option value="2">Couriel</option>
            <option value="3">Papier</option>
          </select>
        </Form.Field>
        <br />
        <Button primary>Enregistrer</Button>
      </Form>;
  }
}