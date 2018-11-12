import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import {
  Redirect
} from 'react-router';

export default class DelEmployeForm extends React.Component {
  state = {
    employes: [],
    noEmploye: '',
    toEmp: false,
  };
  selectChannel = (e) => {
    e.preventDefault();
    alert(e.target.innerHTML);
    this.setState({
      noEmploye: e.target.innerHTML
    });
    alert(`Vous avez effacer le employe avec le numero : ${e.target.innerHTML}`);

    const selection = {
      noEmploye: e.target.innerHTML
    };
    axios.post('/delEmploye', {
      selection
    }).then(res => {
      console.log(res);
      console.log(res.data);
    }).then(() => this.setState(() => ({
      toEmp: true
    })));
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
    if (this.state.toEmp === true) {
      return <Redirect to='employes' />
    }
    return (
      <Table celled padded >
        <Table.Header >
          <Table.Row >
            < Table.HeaderCell > Choisir </Table.HeaderCell>
            <Table.HeaderCell singleLine> Numéro employe </Table.HeaderCell>
            <Table.HeaderCell > Nom </Table.HeaderCell>
            <Table.HeaderCell > Prenom </Table.HeaderCell>
            <Table.HeaderCell > Telephone </Table.HeaderCell>
            <Table.HeaderCell > Mot de passe </Table.HeaderCell>
            <Table.HeaderCell > Role </Table.HeaderCell>
          </Table.Row>
        </Table.Header>


        <Table.Body > {
          this.state.employes.map(employe =>
            <Table.Row key={
              employe.noEmploye
            }>
              <Table.Cell>
                {
                  <Button onClick={
                    (e) => this.selectChannel(e)
                  }> {
                      employe.noEmploye
                    } </Button>
                }
              </Table.Cell>
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
            </Table.Row>
          )
        }
        </Table.Body>
      </Table>
    )
  }
}
