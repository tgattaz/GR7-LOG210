import React from 'react';
import {
    Table,
    Button
} from 'semantic-ui-react';
import axios from 'axios';
import AddEmployeForm from "../addOrUpdateForms/AddEmployeForm";

export default class UpdateEmployeForm extends React.Component {
    state = {
        employes: [],
        modifierEmp: '',
        redirectionPourModification: false,
    };

    siLeChoixEstFaitEnregisterEtChangerDePage = (e) => {
        this.setState({
            modifierEmp: e.target.innerHTML,
            redirectionPourModification: true
        })
    }

    componentDidMount() {
        axios.get('/employes').then(res => {
            this.setState({
                employes: res.data
            });
        }).catch(e => {
            console.log(e);
        });
    }

    render() {
        if (this.state.redirectionPourModification === true) {
            return (<div>
                < AddEmployeForm modifierEmp={
                        this.state.modifierEmp
                    }
                /> </div >

            )

        } else {
            return (<Table celled padded >
                <Table.Header >
                    <Table.Row >
                        <Table.HeaderCell singleLine > Numéro employe </Table.HeaderCell>
                        <Table.HeaderCell > Choisir </Table.HeaderCell>
                        <Table.HeaderCell > Nom </Table.HeaderCell>
                        <Table.HeaderCell > Prénom </Table.HeaderCell>
                        <Table.HeaderCell > Telephone </Table.HeaderCell>
                        <Table.HeaderCell > Mot de passe </Table.HeaderCell>
                        <Table.HeaderCell > Role </Table.HeaderCell>
                    </Table.Row > </Table.Header >
                <Table.Body > {
                    this.state.employes.map(employe =>
                        (<Table.Row key={
                            employe.noEmploye
                        } >
                            <Table.Cell >
                                <Button onClick={
                                    (e) => this.siLeChoixEstFaitEnregisterEtChangerDePage(e)
                                } > {
                                        employe.noEmploye
                                    } </Button>
                            </Table.Cell >
                            <Table.Cell > {
                                employe.noEmploye
                            } </Table.Cell>
                            <Table.Cell > {
                                employe.nom
                            } </Table.Cell>
                            <Table.Cell > {
                                employe.prenom
                            } </Table.Cell>
                            <Table.Cell > {
                                employe.telephone
                            } </Table.Cell>
                            <Table.Cell > {
                                employe.motDePasse
                            } </Table.Cell>
                            <Table.Cell > {
                                employe.role
                            } </Table.Cell>
                        </Table.Row >
                        )
                    )
                } </Table.Body>  </Table >
            )
        }

    }
}