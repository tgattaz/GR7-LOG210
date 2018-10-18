import React from 'react';
import axios from 'axios';

export default class Organisme extends React.Component{
    state ={
        organismes:[],
    };

    componentDidMount(){
        axios.get('/organismes').then(res => {
            console.log(res);
            this.setState({organismes:res.data});
        });
    }

    render(){
        return(
            <table className="tabOrganisme">
              <thead>
                <tr>
                  <th>Numéro d'Organisme</th>
                  <th>Nom</th>
                  <th>NoCivique</th>
                  <th>Rue</th>
                  <th>Ville</th>
                  <th>Province</th>
                  <th>Code postal</th>
                  <th>Télephone</th>
                  <th>Fax</th>
                  <th>Courriel</th>
                </tr>
              </thead>
              <tbody>
                {this.state.organismes.map(organisme =>
                    <tr key={organisme.noOrganisme}>
                        <td>{organisme.noOrganisme}</td>
                        <td>{organisme.nom}</td>
                        <td>{organisme.noCivique}</td>
                        <td>{organisme.rue}</td>
                        <td>{organisme.ville}</td>
                        <td>{organisme.province}</td>
                        <td>{organisme.codePostal}</td>
                        <td>{organisme.telephone}</td>
                        <td>{organisme.fax}</td>
                        <td>{organisme.courriel}</td>
                    </tr>
                )}
              </tbody>
            </table>
        )
    }
}