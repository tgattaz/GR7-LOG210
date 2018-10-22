import React from 'react';
import { Table } from 'semantic-ui-react';
import axios from 'axios';

export default class RefForm extends React.Component {
  state = {
    referent: [],
  };

  componentDidMount() {
    axios.get('/referent').then(res => {
      console.log(res);
      this.setState({ referent: res.data });
    });
  }

  render() {
    return <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nom</Table.HeaderCell>
            <Table.HeaderCell>Prénom</Table.HeaderCell>
            <Table.HeaderCell>Titre</Table.HeaderCell>
            <Table.HeaderCell>Telephone cellulaire</Table.HeaderCell>
            <Table.HeaderCell>Telephone de bureau</Table.HeaderCell>
            <Table.HeaderCell>Fax</Table.HeaderCell>
            <Table.HeaderCell>Couriel</Table.HeaderCell>
            <Table.HeaderCell>Préférence</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.state.referent.map(referent => (
            <Table.Row key={referent.noReferent}>
              <Table.Cell>{referent.nom}</Table.Cell>
              <Table.Cell>{referent.prenom}</Table.Cell>
              <Table.Cell>{referent.titre}</Table.Cell>
              <Table.Cell>{referent.fax}</Table.Cell>
              <Table.Cell>{referent.couriel}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>;
  }
}