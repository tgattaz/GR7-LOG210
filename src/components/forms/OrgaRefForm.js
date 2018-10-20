import React from 'react';
import { Table } from 'semantic-ui-react';
import axios from 'axios';

export default class EmployeForm extends React.Component{
    state ={
        employes:[],
    };

    componentDidMount(){
        axios.get('/employes').then(res => {
            console.log(res);
            this.setState({employes:res.data});
        });
    }

    render(){
        return(
            <Table celled padded>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell singleLine>Numéro Employe</Table.HeaderCell>
                    <Table.HeaderCell>Nom</Table.HeaderCell>
                    <Table.HeaderCell>Prenom</Table.HeaderCell>
                    <Table.HeaderCell>Télephone</Table.HeaderCell>
                    <Table.HeaderCell>Mot de passe</Table.HeaderCell>
                    <Table.HeaderCell>Role</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                {this.state.employes.map(employe =>
                <Table.Row key={employe.noEmploye}>
                    <Table.Cell>{employe.noEmploye}</Table.Cell>
                    <Table.Cell>{employe.nom}</Table.Cell>
                    <Table.Cell>{employe.prenom}</Table.Cell>
                    <Table.Cell>{employe.telephone}</Table.Cell>
                    <Table.Cell>{employe.motDePasse}</Table.Cell>
                    <Table.Cell>{employe.role}</Table.Cell>
                </Table.Row>
                )}
                </Table.Body>
            </Table>
        )
    }
}
