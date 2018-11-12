import React from "react";
import { Table, Button } from "semantic-ui-react";
import axios from "axios";
import AddNoteForm from "../addOrUpdateForms/AddNoteForm";

export default class UpdateNoteForm extends React.Component {
  state = {
    notes: [],
    modifierNote: "",
    redirectionPourModification: false
  };

  siLeChoixEstFaitEnregisterEtChangerDePage = e => {
    this.setState({
      modifierNote: e.target.innerHTML,
      redirectionPourModification: true
    });
  };

  componentDidMount() {
    axios
      .get("/notes")
      .then(res => {
        this.setState({
          notes: res.data
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    if (this.state.redirectionPourModification === true) {
      return (
        <div>
          <AddNoteForm modifierNote={this.state.modifierNote} />
        </div>
      );
    } else {
      return (
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell> Choisir </Table.HeaderCell>
              <Table.HeaderCell singleLine>Numéro de note</Table.HeaderCell>
              <Table.HeaderCell> Nom de l'intervenant </Table.HeaderCell>
              <Table.HeaderCell> noFamille </Table.HeaderCell>
              <Table.HeaderCell> Message </Table.HeaderCell>
              <Table.HeaderCell> NomPersonneConcerne</Table.HeaderCell>
              <Table.HeaderCell> Date </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.state.notes.map(note => (
              <Table.Row key={note.noNote}>
                <Table.Cell>
                  <Button
                    onClick={e =>
                      this.siLeChoixEstFaitEnregisterEtChangerDePage(e)
                    }
                  >
                    {note.noNote}
                  </Button>
                </Table.Cell>
                <Table.Cell> {note.noNote} </Table.Cell>
                <Table.Cell> {note.nomIntervenant} </Table.Cell>
                <Table.Cell> {note.noFamille} </Table.Cell>
                <Table.Cell> {note.message} </Table.Cell>
                <Table.Cell> {note.nomPersonneConcerne} </Table.Cell>
                <Table.Cell> {note.date} </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      );
    }
  }
}
