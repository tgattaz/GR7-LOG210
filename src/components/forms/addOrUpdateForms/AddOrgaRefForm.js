import React from 'react';
import {
    Form,
    Button
} from "semantic-ui-react";
import axios from 'axios';
import OrgaRefForm from '../basicForms/OrgaRefForm';

export default class AddOrgaRefForm extends React.Component {
    state = {
        nom: '',
        noCivique: '',
        rue: '',
        ville: '',
        province: '',
        codePostal: '',
        telephoneBureau: '',
        fax: '',
        curriel: '',
        siteWeb: '',
        etat: '',
        noRefAModifier: '',
        passMessage: false,
        switchRefPage: false,
    };

    handleChangeNom = event => {
        this.setState({
            nom: event.target.value,
            // pour que le message ne s'affiche qu'une fois 
            passMessage: true
        });
    };
    handleChangeNoCivique = event => {
        this.setState({
            noCivique: event.target.value
        });
    };
    handleChangeRue = event => {
        this.setState({
            rue: event.target.value
        });
    };
    handleChangeVille = event => {
        this.setState({
            ville: event.target.value
        });
    };
    handleChangeProvince = event => {
        this.setState({
            province: event.target.value
        });
    };
    handleChangeCodePostal = event => {
        this.setState({
            codePostal: event.target.value
        });
    };
    handleChangeTelephoneBureau = event => {
        this.setState({
            telephoneBureau: event.target.value
        });
    };
    handleChangeFax = event => {
        this.setState({
            fax: event.target.value
        });
    };
    handleChangeCourriel = event => {
        this.setState({
            curriel: event.target.value
        });
    };
    handleChangeSiteWeb = event => {
        this.setState({
            siteWeb: event.target.value
        });
    };
    handleChangeEtat = event => {
        this.setState({
            etat: event.target.value
        });
    };
    handleSumit = event => {
        event.preventDefault();

        const organisme_referent = {
            noOrganismeReferent: this.props.modifierOrgaRef,
            nom: this.state.nom,
            noCivique: this.state.noCivique,
            rue: this.state.rue,
            ville: this.state.ville,
            province: this.state.province,
            codePostal: this.state.codePostal,
            telephoneBureau: this.state.telephoneBureau,
            fax: this.state.fax,
            curriel: this.state.curriel,
            siteWeb: this.state.siteWeb,
            etat: this.state.etat,
        }

        if (this.props.modifierOrgaRef != null) {
            axios.post('/updateOrganismeReferent', {
                    organisme_referent
                })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
        } else {

            axios.post('/addOrgaRef', {
                organisme_referent
            }).then(res => {
                console.log(res);
                console.log(res.data);
            });

        }
        this.setState({
            switchRefPage: true
        })
    };

    render() {
        // variable possèdent le choix fait dans 
        //UpdateOrganismeRefForm 
        var organismeRefChoisi = this.props.modifierOrgaRef

        var messageAEteAffiche = this.state.passMessage


        //la redirection a cette page a été faite par UpdateOrganismeRefForm
        //on peut modifier l'organisme refernt choisi
        if (organismeRefChoisi != null && !messageAEteAffiche) {
            alert(" VOICI UN EXEMPLE DE PROPS DE UpdateOrganismeRefForm à AddorganismeRefForm ,ON PASSE DES VALEURS ENTRE LES CLASSES :), L'organisme référent modifié sera :" + this.props.modifierOrgaRef)

        }

        //redirection apres l'ajout ou la modification 
        if (this.state.switchRefPage) {
            return ( < OrgaRefForm / > )
        }
        return ( <
            Form onSubmit = {
                this.handleSumit
            } >
            <
            Form.Field >
            <
            label >
            Nom de l organisation:
            <
            input type = "text"
            name = "nom"
            onChange = {
                this.handleChangeNom
            }
            /> < /
            label > <
            /Form.Field> <
            br / >
            <
            Form.Field >
            <
            label >
            Numéro Civique:
            <
            input type = "text"
            name = "noCivique"
            onChange = {
                this.handleChangeNoCivique
            }
            /> < /
            label > <
            /Form.Field> <
            br / >
            <
            Form.Field >
            <
            label >
            Rue:
            <
            input type = "text"
            name = "rue"
            onChange = {
                this.handleChangeRue
            }
            /> < /
            label > <
            /Form.Field> <
            br / >
            <
            Form.Field >
            <
            label >
            Ville:
            <
            input type = "text"
            name = "ville"
            onChange = {
                this.handleChangeVille
            }
            /> < /
            label > <
            /Form.Field> <
            br / >
            <
            Form.Field >
            <
            label >
            Province:
            <
            input type = "text"
            name = "province"
            onChange = {
                this.handleChangeProvince
            }
            /> < /
            label > <
            /Form.Field> <
            br / >
            <
            Form.Field >
            <
            label >
            Code Postal:
            <
            input type = "text"
            name = "codePostal"
            onChange = {
                this.handleChangeCodePostal
            }
            /> < /
            label > <
            /Form.Field> <
            br / >
            <
            Form.Field >
            <
            label >
            Télephone Bureau:
            <
            input type = "text"
            name = "telephoneBureau"
            onChange = {
                this.handleChangeTelephoneBureau
            }
            /> < /
            label > <
            /Form.Field> <
            br / >
            <
            Form.Field >
            <
            label >
            Fax:
            <
            input type = "text"
            name = "fax"
            onChange = {
                this.handleChangeFax
            }
            /> < /
            label > <
            /Form.Field> <
            br / >
            <
            Form.Field >
            <
            label >
            Courriel:
            <
            input type = "text"
            name = "courriel"
            onChange = {
                this.handleChangeCourriel
            }
            /> < /
            label > <
            /Form.Field> <
            br / >
            <
            Form.Field >
            <
            label >
            Site Internet:
            <
            input type = "text"
            name = "siteWeb"
            onChange = {
                this.handleChangeSiteWeb
            }
            /> < /
            label > <
            /Form.Field> <
            br / >
            <
            Form.Field >
            <
            select name = 'etat'
            placeholder = "Choisir un etat"
            onChange = {
                this.handleChangeEtat
            } >
            <
            option selected > Choisir < /option>  <
            option value = 'actif' > Actif < /option>  <
            option value = 'inactif' > Inactif < /option>  < /
            select > <
            /Form.Field> <
            br / >
            <
            Button primary > Enregistrer < /Button> < /
            Form >
        );
    }
}