import React from "react";
import axios from "axios";
import { Form, Button, Table } from "semantic-ui-react";
import AddNoteForm from "../../forms/addOrUpdateForms/AddNoteForm";

export default class RechercheFamilleForm extends React.Component {
  state = {
    recherche: "",
    familles_trouves: [],
    choixFamille: "",
    toAddNote: false
  };

  handleChangeRecherche = event => {
    this.setState({
      recherche: event.target.value
    });
  };

  handleSumit = event => {
    event.preventDefault();

    const recherche_famille = {
      recherche: this.state.recherche
    };

    axios
      .post("/recherche_familles", {
        recherche_famille
      })
      .then(res => {
        this.setState({
          familles_trouves: res.data
        });
      })
      .catch(e => {
        console.log(e);
      });
  };

  selectChannel = e => {
    this.setState({
      choixFamille: e.target.innerHTML,
      toAddNote: true
    });
  };

  render() {
    if (this.state.toAddNote === true) {
      return <AddNoteForm choixFamille={this.state.choixFamille} />;
    } else {
      return (
        <div className="rechercheFamille">
          <Form onSubmit={this.handleSumit}>
            <h2> Rercherche d une famille</h2>
            <Form.Field>
              <label>
                Recherche par numéro de dossier, parent, tuteur, référent,
                enfant, une viste supervisée, un échange de garde : <br />
                <input
                  type="text"
                  name="recherche"
                  onChange={this.handleChangeRecherche}
                />
              </label>
            </Form.Field>
            <Button primary> Rechercher </Button>
          </Form>
          <Table celled padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell> choixFamille </Table.HeaderCell>
                <Table.HeaderCell> Numéro de famille </Table.HeaderCell>
                <Table.HeaderCell> Nom de la famille </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.state.familles_trouves.map(famille => (
                <Table.Row key={famille.noFamille}>
                  <Table.Cell>
                    <Button onClick={e => this.selectChannel(e)}>
                      {famille.noFamille}
                    </Button>
                  </Table.Cell>
                  <Table.Cell> {famille.noFamille} </Table.Cell>
                  <Table.Cell> {famille.nomFamille} </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      );
    }
  }
}
