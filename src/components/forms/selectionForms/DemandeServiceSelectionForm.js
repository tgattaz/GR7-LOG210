import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import AddDemandeServiceForm from '../addOrUpdateForms/AddDemandeServiceForm';

export default class DemandeServiceSelectionForm extends React.Component {
    state = {
        demandes_service: [],
        choix_demande_service: '',
        doit_ajouter_demande_service: false,
    };
    selectChannel = (e) => {
        this.setState({
            choix_demande_service: e,
            doit_ajouter_demande_service: true
        })
    }

    componentDidMount() {
        axios.get('/demandes_service').then(res => {
            this.setState({ demandes_service: res.data });
        });
    }

    render() {
        if (this.state.doit_ajouter_demande_service === true) {
            return (
                <AddDemandeServiceForm choix_demande_service={this.state.choix_demande_service} />
            )

        } else {
            return (<Table celled padded>
                <Table.Header>
                    <Table.Row className="header_row">
                        <Table.HeaderCell className="header"> Choisir (Numero unique) </Table.HeaderCell>
                        <Table.HeaderCell className="header"> Date demande </Table.HeaderCell>
                        <Table.HeaderCell className="header"> Fréquence </Table.HeaderCell>
                        <Table.HeaderCell className="header"> Téléphone </Table.HeaderCell>
                        <Table.HeaderCell className="header"> Motif demande </Table.HeaderCell>
                        <Table.HeaderCell className="header"> Parent visiteur </Table.HeaderCell>
                        <Table.HeaderCell className="header"> Parent gardien </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body> {
                    this.state.demandes_service.map(demande_service =>
                        <Table.Row key={demande_service.id_demande_service} className="row">
                            <Table.Cell>
                                <Button
                                    onClick={(e) => this.selectChannel(demande_service.id_demande_service)}>
                                    {
                                        demande_service.id_demande_service
                                    }
                                </Button>
                            </Table.Cell>
                            <Table.Cell> {demande_service.date_demande} </Table.Cell>
                            <Table.Cell> {demande_service.frequence} </Table.Cell>
                            <Table.Cell> {demande_service.telephone} </Table.Cell>
                            <Table.Cell> {demande_service.motif_demande} </Table.Cell>
                            <Table.Cell> {demande_service.nom_parent_visiteur} </Table.Cell>
                            <Table.Cell> {demande_service.nom_parent_gardien} </Table.Cell>
                        </Table.Row>)
                }
                </Table.Body></Table>);
        }

    }
}
