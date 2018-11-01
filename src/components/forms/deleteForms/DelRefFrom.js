import React from 'react';
import {Table,Button} from 'semantic-ui-react';
import axios from 'axios';
import {
  Redirect
} from 'react-router';

export default class DelRefForm extends React.Component {
  state = {
    referents: [],
    noReferent : '',
    toRef: false,
  };
  selectChannel = (e) => {
    e.preventDefault();
    alert(e.target.innerHTML);
    this.setState({
      noReferent: e.target.innerHTML
    });
    alert(`Vous avez effacer le referent avec le numero : ${  e.target.innerHTML}`);

    const selection = {
      noReferent: e.target.innerHTML
    };
    axios.post('/delRef', {
      selection
    }).then(res => {
      console.log(res);
      console.log(res.data);
    }).then(() => this.setState(() => ({
      toRef: true
    })));
  }

  componentDidMount() {
    axios.get('/referents').then(res => {
      this.setState({
        referents: res.data
      });
    }).catch(e => {
      console.log(e);
    });
  }

  render() {
    if (this.state.toRef === true) {
      return <Redirect to = 'Ref' / >
    }
    return <Table celled padded >
      <Table.Header >
      <Table.Row >
      < Table.HeaderCell > Choisir < /Table.HeaderCell>
      <Table.HeaderCell singleLine > Numéro referent < /Table.HeaderCell> <Table.HeaderCell > Nom < /Table.HeaderCell> 
      <Table.HeaderCell > Prénom </Table.HeaderCell>
      <Table.HeaderCell > Titre < /Table.HeaderCell> 
      <Table.HeaderCell > Telephone cellulaire < /Table.HeaderCell>
      <Table.HeaderCell > Telephone de bureau < /Table.HeaderCell> 
      <Table.HeaderCell > Fax < /Table.HeaderCell> 
      <Table.HeaderCell > Préférence < /Table.HeaderCell> 
      <Table.HeaderCell > Email < /Table.HeaderCell> 
      </Table.Row> 
      </Table.Header>
      
      
       <Table.Body > {
        this.state.referents.map(referent => ( <
          Table.Row key = {
            referent.noReferent
          } > < Table.Cell > 
              { 
              <Button onClick = {
                (e) => this.selectChannel(e)
              } > {
                referent.noReferent
              } < /Button>
                }  
              </Table.Cell>
          <
          Table.Cell > {
            referent.noReferent
          } < /Table.Cell> <
          Table.Cell > {
            referent.nom
          } < /Table.Cell> <
          Table.Cell > {
            referent.prenom
          } < /Table.Cell> <
          Table.Cell > {
            referent.titre
          } < /Table.Cell> <
          Table.Cell > {
            referent.telephoneCell
          } < /Table.Cell> <
          Table.Cell > {
            referent.telephoneBureau
          } < /Table.Cell> <
          Table.Cell > {
            referent.fax
          } < /Table.Cell> <
          Table.Cell > {
            referent.preferenceReception
          } < /Table.Cell> <
          Table.Cell > {
            referent.email
          } < /Table.Cell> <
          /Table.Row>
        ))
      } <
      /Table.Body> <
      /Table>;
  }
}