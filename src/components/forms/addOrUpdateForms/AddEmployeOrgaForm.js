import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import AddEmployeForm from "../../forms/addOrUpdateForms/AddEmployeForm";
import axios from 'axios';

export default class AddEmployeOrgaForm extends React.Component {
    state = {
        organismes: [],
        choixOrg: '',
        toAddEmploye: false,
    };
    selectChannel = (e) => {
        this.setState({
            choixOrg:
                e.target.innerHTML,
            toAddEmploye: true
        })
    }

    componentDidMount() {
        axios.get('/organismes').then(res => {
            this.setState({ organismes: res.data });
        });
    }

    render() {
        if (this.state.toAddEmploye === true) {
            return (
                <AddEmployeForm choixOrg={this.state.choixOrg} />
            )

        } else {
            return (<Table celled padded >
                <Table.Header >
                    <Table.Row >
                        <Table.HeaderCell > Choisir </Table.HeaderCell>
                        <Table.HeaderCell singleLine > Numero unique </Table.HeaderCell>
                        <Table.HeaderCell > Nom organisme </Table.HeaderCell>
                        <Table.HeaderCell > Numéro Civique </Table.HeaderCell>
                        <Table.HeaderCell > Rue </Table.HeaderCell>
                        <Table.HeaderCell > Ville </Table.HeaderCell>
                        <Table.HeaderCell > Province </Table.HeaderCell>
                        <Table.HeaderCell > Code Postal </Table.HeaderCell>
                        <Table.HeaderCell > Télephone Bureau </Table.HeaderCell>
                        <Table.HeaderCell > Fax </Table.HeaderCell>
                        <Table.HeaderCell > Courriel </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>


                < Table.Body > {
                    this.state.organismes.map(organismes =>
                        <Table.Row key={
                            organismes.noOrganisme
                        } >
                            <Table.Cell >
                                <Button
                                    onClick={
                                        (e) => this.selectChannel(e)
                                    } > {
                                        organismes.noOrganisme
                                    } </Button>
                            </Table.Cell>
                            <Table.Cell > {
                                organismes.noOrganisme
                            } </Table.Cell>
                            <Table.Cell > {
                                organismes.nom
                            } </Table.Cell>
                            <Table.Cell > {
                                organismes.noCivique
                            } </Table.Cell>
                            <Table.Cell > {
                                organismes.rue
                            } </Table.Cell>
                            <Table.Cell> {
                                organismes.ville
                            } </Table.Cell>
                            <Table.Cell > {
                                organismes.province
                            } </Table.Cell>
                            <Table.Cell > {
                                organismes.codePostal
                            } </Table.Cell>
                            <Table.Cell > {
                                organismes.telephone
                            } </Table.Cell>
                            <Table.Cell > {
                                organismes.fax
                            } </Table.Cell>
                            <Table.Cell > {
                                organismes.courriel
                            } </Table.Cell>
                        </Table.Row>
                    )
                } </Table.Body> </Table>
            )
        }

    }
}
