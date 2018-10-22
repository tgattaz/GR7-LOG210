import React from 'react';
import axios from 'axios';
import { Form, Button, Table } from "semantic-ui-react";

export default class RechercheReferent extends React.Component {
    state = {
        recherche: '',
        referents_trouves: []
    };

    handleChangeRecherche = event => {
        this.setState({ recherche: event.target.value });
    };

    handleSumit = event => {
        event.preventDefault();

        const recherche_referent = {
            recherche: this.state.recherche
        }

        axios.post('/recherche_referents', { recherche_referent })
            .then(res => {
                this.setState({ referents_trouves: res.data })
                console.log(res);
                console.log(res.data);
            }).catch(e => {
                console.log(e);
            });;
    };

    render() {
        return (
            <div className="rechercheReferent">
                <Form onSubmit={this.handleSumit}>
                    <h2>Rercherche d'un référent</h2>
                    <Form.Field>
                        <label>
                            Recherche par nom, prénom, nom d'organisme, titre, numéro de téléphone ou numéro de dossier de famille :
                            <br />
                            <input type="text" name="recherche" onChange={this.handleChangeRecherche} />
                        </label>
                    </Form.Field>
                    <Button primary>Rechercher</Button>
                </Form>
                <Table celled padded>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Numéro de référent</Table.HeaderCell>
                            <Table.HeaderCell>Nom</Table.HeaderCell>
                            <Table.HeaderCell>Prénom</Table.HeaderCell>
                            <Table.HeaderCell>Titre</Table.HeaderCell>
                            <Table.HeaderCell>Téléphone cellulaire</Table.HeaderCell>
                            <Table.HeaderCell>Téléphone bureau</Table.HeaderCell>
                            <Table.HeaderCell>Fax</Table.HeaderCell>
                            <Table.HeaderCell>Préférence réception</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.state.referents_trouves.map(referent =>
                            <Table.Row key={referent.noReferent}>
                                <Table.Cell>{referent.noReferent}</Table.Cell>
                                <Table.Cell>{referent.nom}</Table.Cell>
                                <Table.Cell>{referent.prenom}</Table.Cell>
                                <Table.Cell>{referent.titre}</Table.Cell>
                                <Table.Cell>{referent.telephoneCell}</Table.Cell>
                                <Table.Cell>{referent.telephoneBureau}</Table.Cell>
                                <Table.Cell>{referent.fax}</Table.Cell>
                                <Table.Cell>{referent.preferenceReception}</Table.Cell>
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table>
            </div>
        );
    }
}