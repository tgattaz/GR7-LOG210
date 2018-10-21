import React from 'react';
import axios from 'axios';

export default class RechercheReferent extends React.Component {
    constructor(props) {
        super(props);

        this.data = {
            columnDefs: [
                { headerName: "Make", field: "nom" },
                { headerName: "Model", field: "prenom" },
                { headerName: "Price", field: "titre" },
                { headerName: "Model", field: "telephoneCell" },
                { headerName: "Model", field: "telephoneBureau" },
                { headerName: "Model", field: "fax" },
                { headerName: "Model", field: "prenom" },
                { headerName: "Model", field: "prenom" },

            ],
            rowData: [
                { make: "Toyota", model: "Celica", price: 35000 },
                { make: "Ford", model: "Mondeo", price: 32000 },
                { make: "Porsche", model: "Boxter", price: 72000 }
            ]
        }
    }

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
                <form onSubmit={this.handleSumit}>
                    <h2>Rercherche d'un référent</h2>
                    <label>
                        Recherche par nom, prénom, nom d'organisme, titre, numéro de téléphone ou numéro de dossier de famille :
                    <br />
                        <input type="text" name="recherche" onChange={this.handleChangeRecherche} />
                        <input type="submit" value="Rechercher" />
                    </label>
                </form>
                <table className="tabRechercheReferents">
                    <thead>
                        <tr>
                            <th>Numéro de référent</th>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Titre</th>
                            <th>Téléphone cellulaire</th>
                            <th>Téléphone bureau</th>
                            <th>Fax</th>
                            <th>Préférence réception</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.referents_trouves.map(referent =>
                            <tr key={referent.noReferent}>
                                <td>{referent.noReferent}</td>
                                <td>{referent.nom}</td>
                                <td>{referent.prenom}</td>
                                <td>{referent.titre}</td>
                                <td>{referent.telephoneCell}</td>
                                <td>{referent.telephoneBureau}</td>
                                <td>{referent.fax}</td>
                                <td>{referent.preferenceReception}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}