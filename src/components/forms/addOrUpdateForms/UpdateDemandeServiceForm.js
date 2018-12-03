import React from 'react';
import { Link } from 'react-router-dom'
import { Checkbox, Input, Icon, Header, Divider, Select, TextArea } from 'semantic-ui-react'
import { Form, Button, Dropdown } from "semantic-ui-react";
import axios from 'axios';

export default class UpdateDemandeServiceForm extends React.Component {
    state = {
        parent_visiteur: 0,
        horaire_dispo_parent_visiteur: '',
        parent_gardien: 0,
        horaire_dispo_parent_gardien: '',
        parents: [],
        choix_demande_service: 0,
    };

    handleSubmit = event => {
        event.preventDefault();

        var dateDemande = this.state.date_demande;
        var texteDateDemande = dateDemande.getFullYear() + '-' + (parseInt(dateDemande.getMonth()) + 1) + '-' + dateDemande.getDay();

        //TODO: fix l'authentification et l'obtention de l'employé connecté en ce moment
        this.setState({ employe_debute_demande: /*localStorage.userId*/51 });
        const demandeService = {
            date_demande: texteDateDemande,
            frequence: this.state.frequence,
            parent_assume_frais: this.state.parent_assume_frais,
            telephone: this.state.telephone,
            employe_debute_demande: this.state.employe_debute_demande,
            parent_visiteur: this.state.parent_visiteur,
            horaire_dispo_parent_visiteur: this.state.horaire_dispo_parent_visiteur,
            parent_gardien: this.state.parent_gardien,
            horaire_dispo_parent_gardien: this.state.horaire_dispo_parent_gardien,
            motif: this.state.motif,
        }

        axios.post('/addDemandeService', {
            demandeService
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    };

    handleChangeParentVisiteur = (event, { value }) => {
        this.setState({ parent_visiteur: value });
    };
    handleChangeHoraireDispoParentVisiteur = event => {
        this.setState({ horaire_dispo_parent_visiteur: event.target.value });
    };
    handleChangeParentGardien = (event, { value }) => {
        this.setState({ parent_gardien: value });
    };
    handleChangeHoraireDispoParentGardien = event => {
        this.setState({ horaire_dispo_parent_gardien: event.target.value });
    };

    componentDidMount() {
        axios.get('/parents').then(res => {
            console.log(res);

            var parentsFormattes = [];
            res.data.forEach(element => {
                var parent = {
                    text: element.prenom + ' ' + element.nom,
                    value: element.noParent,
                };

                parentsFormattes.push(parent);
            });

            this.setState({ parents: parentsFormattes });
        });

        this.setState({ choix_demande_service: this.props.choix_demande_service });
        axios.post("/demande_service_par_id", { id_demande_service: this.state.choix_demande_service })
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                    <label>
                        Parent visiteur:
                        <Dropdown
                            fluid selection
                            placeholder='Sélectionnez un parent...'
                            options={this.state.parents}
                            onChange={this.handleChangeParentVisiteur} />
                    </label>
                </Form.Field>

                <Form.Field>
                    <label>
                        Horaire de disponibilité du parent visiteur:
                        <input type="text" name="horaire_dispo_parent_visiteur" onChange={this.handleChangeHoraireDispoParentVisiteur} />
                    </label>
                </Form.Field>

                <Form.Field>
                    <label>
                        Parent gardien:
                        <Dropdown
                            placeholder='Sélectionnez un parent...'
                            fluid selection
                            options={this.state.parents}
                            onChange={this.handleChangeParentGardien} />
                    </label>
                </Form.Field>

                <Form.Field>
                    <label>
                        Horaire de disponibilité du parent gardien:
                        <input type="text" name="horaire_dispo_parent_gardien" onChange={this.handleChangeHoraireDispoParentGardien} />
                    </label>
                </Form.Field>

                <Form.Field>
                    <label>
                        Motif de la demande:
                        <input type="text" name="motif" onChange={this.handleChangeMotif} />
                    </label>
                </Form.Field>

                <Button>Créer la demande de service</Button>
            </Form>
        );
    }
}