import React from 'react';
import axios from 'axios';

export default class Employe extends React.Component{
    state ={
        employes:[],
    };

    componentDidMount(){
        axios.get('/employes').then(res => {
            console.log(res);
            this.setState({employes:res.data});
        });
    }

    render(){
        return(
            <table className="tabEmploye">
              <thead>
                <tr>
                  <th>Numéro Employe</th>
                  <th>Nom</th>
                  <th>Prenom</th>
                  <th>Télephone</th>
                  <th>Mot de passe</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {this.state.employes.map(employe =>
                    <tr key={employe.noEmploye}>
                        <td>{employe.noEmploye}</td>
                        <td>{employe.nom}</td>
                        <td>{employe.prenom}</td>
                        <td>{employe.telephone}</td>
                        <td>{employe.motDePasse}</td>
                        <td>{employe.role}</td>
                    </tr>
                )}
              </tbody>
            </table>
        )
    }
}