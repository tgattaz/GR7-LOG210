import React from 'react';
import { Table } from 'semantic-ui-react';
import axios from 'axios';

export default class OrgaRefForm extends React.Component{
    state ={
        organismes_referents:[],
    };

    componentDidMount(){
        axios.get('/OrgaRef').then(res => {
            console.log(res);
            this.setState({organismes_referents:res.data});
        });
    }

    render(){
        return(
          <Table celled padded>
              <Table.Header>
              <Table.Row>
                  <Table.HeaderCell singleLine>Nom</Table.HeaderCell>
                  <Table.HeaderCell>Nom organisme réferent</Table.HeaderCell>
                  <Table.HeaderCell>Numéro Civique</Table.HeaderCell>
                  <Table.HeaderCell>Rue</Table.HeaderCell>
                  <Table.HeaderCell>Ville</Table.HeaderCell>
                  <Table.HeaderCell>Province</Table.HeaderCell>
                  <Table.HeaderCell>Code Postal</Table.HeaderCell>
                  <Table.HeaderCell>Télephone Bureau</Table.HeaderCell>
                  <Table.HeaderCell>Fax</Table.HeaderCell>
                  <Table.HeaderCell>Courriel</Table.HeaderCell>
                  <Table.HeaderCell>Site Web</Table.HeaderCell>
                  <Table.HeaderCell>Etat</Table.HeaderCell>
              </Table.Row>
              </Table.Header>

              <Table.Body>
                </Table.Row>
                )}
                </Table.Body>
            </Table>
        )
    }
}
