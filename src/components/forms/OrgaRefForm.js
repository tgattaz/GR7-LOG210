import React from 'react';
import { Table } from 'semantic-ui-react';
import axios from 'axios';

export default class OrgaRefForm extends React.Component{
    state ={
        organismes_referents:[],
    };

    componentDidMount(){
        axios.get('/organismes_referents').then(res => {
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
                {this.state.organismes_referents.map(organisme_referent =>
                  <Table.Row key={organisme_referent.noOrganismeReferent}>
                    <Table.Cell>{organisme_referent.noOrganismeReferent}</Table.Cell>
                    <Table.Cell>{organisme_referent.nom}</Table.Cell>
                    <Table.Cell>{organisme_referent.noCivique}</Table.Cell>
                    <Table.Cell>{organisme_referent.rue}</Table.Cell>
                    <Table.Cell>{organisme_referent.ville}</Table.Cell>
                    <Table.Cell>{organisme_referent.province}</Table.Cell>
                    <Table.Cell>{organisme_referent.codePostal}</Table.Cell>
                    <Table.Cell>{organisme_referent.telephoneBureau}</Table.Cell>
                    <Table.Cell>{organisme_referent.fax}</Table.Cell>
                    <Table.Cell>{organisme_referent.courriel}</Table.Cell>
                    <Table.Cell>{organisme_referent.siteWeb}</Table.Cell>
                    <Table.Cell>{organisme_referent.etat}</Table.Cell>
                </Table.Row>
                )}
                </Table.Body>
            </Table>
        )
    }
}
