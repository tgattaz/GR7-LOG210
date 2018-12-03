import React from "react";
import { Table } from "semantic-ui-react";
import axios from "axios";
import Moment from 'moment';
export default class NoteForm extends React.Component {
  state = {
    notes: []
  };

  componentDidMount() {
    axios
      .get("/notes")
      .then(res => {
        this.setState({ notes: res.data });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return (
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>Numéro de note</Table.HeaderCell>
            <Table.HeaderCell>Nom de l'intervenant</Table.HeaderCell>
            <Table.HeaderCell>numero de famille</Table.HeaderCell>
            <Table.HeaderCell>message</Table.HeaderCell>
            <Table.HeaderCell>nom de la personne concerné</Table.HeaderCell>
            <Table.HeaderCell>date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.state.notes.map(note => (
            <Table.Row key={note.noNote}>
              <Table.Cell>{note.noNote}</Table.Cell>
              <Table.Cell>{note.nomIntervenant}</Table.Cell>
              <Table.Cell>{note.noFamille}</Table.Cell>
              <Table.Cell>{note.message}</Table.Cell>
              <Table.Cell>{note.nomPersonneConcerne}</Table.Cell>
              <Table.Cell>{Moment.locale('en'),
              Moment(note.date).format('LLLL')
              }</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }
}
