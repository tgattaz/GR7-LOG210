import React from 'react';
import { Table } from 'semantic-ui-react';
import axios from 'axios';

export default class OrganismeForm extends React.Component{
    state ={
        organismes:[],
    };

    componentDidMount(){
        axios.get('/organismes').then(res => {
            console.log(res);
            this.setState({organismes:res.data});
        });
    }

    render(){
        return(
          <Table celled padded>
              <Table.Header>
              <Table.Row>
                  <Table.HeaderCell singleLine>#</Table.HeaderCell>
                  <Table.HeaderCell>Nom</Table.HeaderCell>
                  <Table.HeaderCell>Numéro Civique</Table.HeaderCell>
                  <Table.HeaderCell>Rue</Table.HeaderCell>
                  <Table.HeaderCell>Ville</Table.HeaderCell>
                  <Table.HeaderCell>Province</Table.HeaderCell>
                  <Table.HeaderCell>Code Postal</Table.HeaderCell>
                  <Table.HeaderCell>Télephone Bureau</Table.HeaderCell>
                  <Table.HeaderCell>Fax</Table.HeaderCell>
                  <Table.HeaderCell>Courriel</Table.HeaderCell>
              </Table.Row>
              </Table.Header>

              <Table.Body>
                    {this.state.organismes.map(organismes =>
                        <Table.Row key={organismes.noOrganisme}>
                            <Table.Cell>{organismes.noOrganisme}</Table.Cell>
                            <Table.Cell>{organismes.nom}</Table.Cell>
                            <Table.Cell>{organismes.noCivique}</Table.Cell>
                            <Table.Cell>{organismes.rue}</Table.Cell>
                            <Table.Cell>{organismes.ville}</Table.Cell>
                            <Table.Cell>{organismes.province}</Table.Cell>
                            <Table.Cell>{organismes.codePostal}</Table.Cell>
                            <Table.Cell>{organismes.telephone}</Table.Cell>
                            <Table.Cell>{organismes.fax}</Table.Cell>
                            <Table.Cell>{organismes.courriel}</Table.Cell>
                </Table.Row>
                )}
                </Table.Body>
            </Table>
        )
    }
}
