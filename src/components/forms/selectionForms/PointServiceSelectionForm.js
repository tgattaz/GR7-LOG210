import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import AddServiceForm from "../../forms/addOrUpdateForms/AddServiceForm";
import axios from 'axios';

export default class PointServiceSelectionForm extends React.Component {
    state = {
        points_services: [],
        choixPointService: '',
        toAddService: false,
    };
    selectChannel = (e) => {
        this.setState({
            choixPointService:
                e.target.innerHTML,
                toAddService: true
        })
    }

    componentDidMount() {
        axios.get('/points_services').then(res => {
            this.setState({ points_services: res.data });
        });
    }

    render() {
        if (this.state.toAddService === true) {
            return (
                <AddServiceForm choixPointService={this.state.choixPointService} />
            )

        } else {
            return (<Table celled padded >
                <Table.Header >
                    <Table.Row >
                        <Table.HeaderCell > Choisir </Table.HeaderCell>
                        <Table.HeaderCell singleLine > Numero unique </Table.HeaderCell>
                        <Table.HeaderCell > Nom du point de service réferent </Table.HeaderCell>
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


                < Table.Body > 
                {this.state.points_services.map(points_services =>
                        <Table.Row key={points_services.noPointDeService} >
                            <Table.Cell >
                                <Button onClick={ (e) => this.selectChannel(e)} > 
                                {points_services.noPointDeService}
                                </Button>
                            </Table.Cell>
                            <Table.Cell > {points_services.noPointDeService}</Table.Cell>
                            <Table.Cell > {points_services.nom}</Table.Cell>
                            <Table.Cell > {points_services.noCivique}</Table.Cell>
                            <Table.Cell > {points_services.rue } </Table.Cell>
                            <Table.Cell > {points_services.ville}</Table.Cell>
                            <Table.Cell > {points_services.province}</Table.Cell>
                            <Table.Cell > {points_services.codePostal}</Table.Cell>
                            <Table.Cell > {points_services.telephone}</Table.Cell>
                            <Table.Cell > {points_services.fax} </Table.Cell>
                            <Table.Cell > {points_services.courriel} </Table.Cell>
                        </Table.Row>
                    )
                } </Table.Body> </Table>
                
            )
        }

    }
}
