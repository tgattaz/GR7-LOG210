import React from "react";
import axios from "axios";
import { Table, Button } from "semantic-ui-react";
import { Redirect } from "react-router";
export default class DelNoteForm extends React.Component {
  state = {
    notes: [],
    noNote: "",
    toNote: false
  };

  selectChannel = e => {
    e.preventDefault();
    alert(e.target.innerHTML);
    this.setState({
      noNote: e.target.innerHTML
    });
    alert(`Vous avez effacer la note avec le numero : ${e.target.innerHTML}`);

    const selection = {
      noNote: e.target.innerHTML
    };
    axios
      .post("/delNote", {
        selection
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .then(() =>
        this.setState(() => ({
          toNote: true
        }))
      );
  };

  componentDidMount() {
    axios.get("/notes").then(res => {
      console.log(res);
      this.setState({
        notes: res.data
      });
    });
  }

  render() {
    if (this.state.toNote === true) {
      return <Redirect to="Note" />;
    }
    return (
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell> Choisir </Table.HeaderCell>
            <Table.HeaderCell singleLine> Numero de note </Table.HeaderCell>
            <Table.HeaderCell> Nom de l'intervenant </Table.HeaderCell>
            <Table.HeaderCell> Numero de famille </Table.HeaderCell>
            <Table.HeaderCell> Message </Table.HeaderCell>
            <Table.HeaderCell> Nom de la personne concerné </Table.HeaderCell>
            <Table.HeaderCell> Date </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.state.notes.map(note => (
            <Table.Row key={note.noNotes}>
              <Table.Cell>
                {
                  <Button onClick={e => this.selectChannel(e)}>
                    {note.noNote}
                  </Button>
                }
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
