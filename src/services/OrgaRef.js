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
                    <tr key={organisme.noOrganismeReferent}>
                        <td>{organisme.noOrganismeReferent}</td>
                        <td>{organisme.nom}</td>
                        <td>{organisme.noCivique}</td>
                        <td>{organisme.rue}</td>
                        <td>{organisme.ville}</td>
                        <td>{organisme.province}</td>
                        <td>{organisme.codePostal}</td>
                        <td>{organisme.telephoneBureau}</td>
                        <td>{organisme.fax}</td>
                        <td>{organisme.courriel}</td>
                        <td>{organisme.siteWeb}</td>
                        <td>{organisme.etat}</td>
                    </tr>
                )}
              </tbody>
            </table>
        )
    }
}
