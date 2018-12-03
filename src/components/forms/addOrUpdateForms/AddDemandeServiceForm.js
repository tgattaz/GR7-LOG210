import React from 'react';
import { Link } from 'react-router-dom'
import { Checkbox, Input, Icon, Header, Divider, Select, TextArea } from 'semantic-ui-react'
import { Form, Button, Dropdown } from "semantic-ui-react";
import axios from 'axios';

export default class AddDemandeServiceForm extends React.Component {
    state = {
        date_demande: new Date(),
        frequence: '',
        parent_assume_frais: 0,
        telephone: '',
        employe_debute_demande: 0,
        parent_visiteur: 0,
        horaire_dispo_parent_visiteur: '',
        parent_gardien: 0,
        horaire_dispo_parent_gardien: '',
        motif: '',
        documents_recus: '',
        documents_a_suivre: '',
        parents: [],
    };

    handleSubmit = event => {
        event.preventDefault();
        
        var id_demande_service_props = this.props.choix_demande_service;
        if (id_demande_service_props !== undefined) {
            const demandeService = {
                id_demande_service: id_demande_service_props,
                parent_visiteur: this.state.parent_visiteur,
                horaire_dispo_parent_visiteur: this.state.horaire_dispo_parent_visiteur,
                parent_gardien: this.state.parent_gardien,
                horaire_dispo_parent_gardien: this.state.horaire_dispo_parent_gardien,
            }
            axios.post('/updateDemandeService', {
                demandeService
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
        }
        else {
            var dateDemande = this.state.date_demande;
            var texteDateDemande = dateDemande.getFullYear() + '-' + (parseInt(dateDemande.getMonth()) + 1) + '-' + dateDemande.getDay();
    
            //TODO: fix l'authentification et l'obtention de l'employé connecté en ce moment
            this.setState({ employe_debute_demande: localStorage.userId });

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
                documents_recus: this.state.documents_recus,
                documents_a_suivre: this.state.documents_a_suivre,
            }
            axios.post('/addDemandeService', {
                demandeService
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
        }
    };

    handleChangeFrequence = event => {
        this.setState({ frequence: event.target.value });
    };
    handleChangeParentAssumeFrais = (event, { value }) => {
        this.setState({ parent_assume_frais: value });
    };
    handleChangeTelephone = event => {
        this.setState({ telephone: event.target.value });
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
    handleChangeMotif = event => {
        this.setState({ motif: event.target.value });
    };
    handleChangeDocumentRecus = event => {
        this.setState({ documents_recus: event.target.value });
    };
    handleChangeDocumentASuivre = event => {
        this.setState({ documents_a_suivre: event.target.value });
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

        if (this.props.choix_demande_service !== undefined) {
            const demande_service = {
                id_demande_service: this.props.choix_demande_service
            }
            
            axios.post("/demande_service_par_id", { demande_service })
                .then(res => {
                    this.setState({
                        date_demande:res.data[0].date_demande, 
                        documents_a_suivre:res.data[0].documents_a_suivre, 
                        documents_recus:res.data[0].documents_recus, 
                        employe_debute_demande:res.data[0].fk_employe_debute_demande, 
                        parent_assume_frais:res.data[0].fk_parent_assume_frais, 
                        parent_gardien:res.data[0].fk_parent_gardien, 
                        parent_visiteur:res.data[0].fk_parent_visiteur, 
                        frequence:res.data[0].frequence, 
                        horaire_dispo_parent_gardien:res.data[0].horaire_dispo_parent_gardien, 
                        horaire_dispo_parent_visiteur:res.data[0].horaire_dispo_parent_visiteur,  
                        motif:res.data[0].motif_demande, 
                        telephone:res.data[0].telephone, 
                    });
                    console.log(res.data);
                })
                .catch(e => {
                    console.log(e);
                });
        }
    }

    render() {

        var isUpdateInsteadOfAdd = this.props.choix_demande_service !== undefined;

        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Field disabled={isUpdateInsteadOfAdd}>
                    <label>
                        Fréquence:
                        <input type="text" name="frequence" onChange={this.handleChangeFrequence} />
                    </label>
                </Form.Field>

                <Form.Field disabled={isUpdateInsteadOfAdd}>
                    <label>
                        Parent assumant les frais:
                        <Dropdown
                            placeholder='Sélectionnez un parent...' fluid selection
                            options={this.state.parents}
                            onChange={this.handleChangeParentAssumeFrais} />
                    </label>
                </Form.Field>

                <Form.Field disabled={isUpdateInsteadOfAdd}>
                    <label>
                        Téléphone:
                        <input type="text" name="telephone" onChange={this.handleChangeTelephone} />
                    </label>
                </Form.Field>

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

                <Form.Field disabled={isUpdateInsteadOfAdd}>
                    <label>
                        Motif de la demande:
                        <input type="text" name="motif" onChange={this.handleChangeMotif} />
                    </label>
                </Form.Field>

                <Form.Field disabled={isUpdateInsteadOfAdd}>
                    <label>
                        Documents recus:
                        <input type="text" name="documents_recus" onChange={this.handleChangeDocumentRecus} />
                    </label>
                </Form.Field>

                <Form.Field disabled={isUpdateInsteadOfAdd}>
                    <label>
                        Documents à suivre:
                        <input type="text" name="documents_a_suivre" onChange={this.handleChangeDocumentASuivre} />
                    </label>
                </Form.Field>

                <Button>{isUpdateInsteadOfAdd?"Mettre à jour les informations du parent":"Créer la demande de service"}</Button>
            </Form>
        );
    }
}