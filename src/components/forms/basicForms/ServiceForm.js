import React from 'react';
import { Table } from 'semantic-ui-react';
import axios from 'axios';

export default class ServiceForm extends React.Component {
  state = {
    services: [],
  };

  componentDidMount() {
    axios.get('/services').then(res => {
      this.setState({ services: res.data });
    }).catch(e=>{
      console.log(e);
    });
  }

  render() {
    return <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>#</Table.HeaderCell>
            <Table.HeaderCell>nom du service</Table.HeaderCell>
            <Table.HeaderCell>Tarification pour le parent</Table.HeaderCell>
            <Table.HeaderCell>Tarification subventionnée</Table.HeaderCell>
            <Table.HeaderCell>Tarification pour le CISS</Table.HeaderCell>
            <Table.HeaderCell>État du service</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.state.services.map(service => (
            <Table.Row key={service.noReferent}>
              <Table.Cell>{service.noService}</Table.Cell>
              <Table.Cell>{service.nomService}</Table.Cell>
              <Table.Cell>{service.tarificationParent}</Table.Cell>
              <Table.Cell>{service.tarificationSubventionnee}</Table.Cell>
              <Table.Cell>{service.tarificationCiss}</Table.Cell>
              <Table.Cell>{service.etatDuService}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>;
  }
}