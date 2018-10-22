import React from 'react';
import axios from 'axios';

export default class OrgaRef extends React.Component{
    state ={
        organismes_referents:[],
    };

    componentDidMount(){
        axios.get('/organismes_referents').then(res => {
            console.log(res);
            this.setState({organismes_referents:res.data});
        });
    }

    render(){
        return(
            <table className="tabOrganisme_Referent">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Nom organisme réferent</th>
                  <th>Numéro Civique</th>
                  <th>Rue</th>
                  <th>Ville</th>
                  <th>Province</th>
                  <th>Code Postal</th>
                  <th>Télephone Bureau</th>
                  <th>Fax</th>
                  <th>Courriel</th>
                  <th>Site Web</th>
                  <th>Etat</th>
                </tr>
              </thead>
              <tbody>
                {this.state.organismes_referents.map(organisme_referent =>
                    <tr key={organisme_referent.noOrganismeReferent}>
                        <td>{organisme_referent.noOrganismeReferent}</td>
                        <td>{organisme_referent.nom}</td>
                        <td>{organisme_referent.noCivique}</td>
                        <td>{organisme_referent.rue}</td>
                        <td>{organisme_referent.ville}</td>
                        <td>{organisme_referent.province}</td>
                        <td>{organisme_referent.codePostal}</td>
                        <td>{organisme_referent.telephoneBureau}</td>
                        <td>{organisme_referent.fax}</td>
                        <td>{organisme_referent.courriel}</td>
                        <td>{organisme_referent.siteWeb}</td>
                        <td>{organisme_referent.etat}</td>
                    </tr>
                )}
              </tbody>
            </table>
        )
    }
}
