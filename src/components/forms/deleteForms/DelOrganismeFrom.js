import React from 'react';
import {
  Table,Button
} from 'semantic-ui-react';
import axios from 'axios';
import {
  Redirect
} from 'react-router';
export default class OrganismeForm extends React.Component {
  state = {
    organismes: [],
    noOrganisme: '',
    toOrganime: false,
  };

  selectChannel = (e) => {
    e.preventDefault();
    alert(e.target.innerHTML);
    this.setState({
      noOrganisme: e.target.innerHTML
    });
    alert(`Vous avez effacer le referent avec le numero : ${  e.target.innerHTML}`);

    const selection = {
      noOrganisme: e.target.innerHTML
    };
    axios.post('/delOrganisme', {
      selection
    }).then(res => {
      console.log(res);
      console.log(res.data);
    }).then(() => this.setState(() => ({
      toOrganime: true
    })));
  }

  componentDidMount() {
    axios.get('/organismes').then(res => {
      console.log(res);
      this.setState({
        organismes: res.data
      });
    });
  }

  render() {
    if (this.state.toOrganime === true) {
      return <Redirect to = 'Organisme' / >
    }
    return ( <
      Table celled padded >
      <
      Table.Header >
      <
      Table.Row >
       < Table.HeaderCell > Choisir < /Table.HeaderCell>
      <
      Table.HeaderCell singleLine > Nom < /Table.HeaderCell> <
      Table.HeaderCell > Nom organisme < /Table.HeaderCell> <
      Table.HeaderCell > Numéro Civique < /Table.HeaderCell> <
      Table.HeaderCell > Rue < /Table.HeaderCell> <
      Table.HeaderCell > Ville < /Table.HeaderCell> <
      Table.HeaderCell > Province < /Table.HeaderCell> <
      Table.HeaderCell > Code Postal < /Table.HeaderCell> <
      Table.HeaderCell > Télephone Bureau < /Table.HeaderCell> <
      Table.HeaderCell > Fax < /Table.HeaderCell> <
      Table.HeaderCell > Courriel < /Table.HeaderCell> <
      /Table.Row> <
      /Table.Header>

      <
      Table.Body > {
        this.state.organismes.map(organismes =>
          <
          Table.Row key = {
            organismes.noOrganisme
          } >
          < Table.Cell > { <
              Button onClick = {
                (e) => this.selectChannel(e)
              } > {
                organismes.noOrganisme
              } < /Button>
            } <
            /Table.Cell>
          <
          Table.Cell > {
            organismes.noOrganisme
          } < /Table.Cell> <
          Table.Cell > {
            organismes.nom
          } < /Table.Cell> <
          Table.Cell > {
            organismes.noCivique
          } < /Table.Cell> <
          Table.Cell > {
            organismes.rue
          } < /Table.Cell> <
          Table.Cell > {
            organismes.ville
          } < /Table.Cell> <
          Table.Cell > {
            organismes.province
          } < /Table.Cell> <
          Table.Cell > {
            organismes.codePostal
          } < /Table.Cell> <
          Table.Cell > {
            organismes.telephoneBureau
          } < /Table.Cell> <
          Table.Cell > {
            organismes.fax
          } < /Table.Cell> <
          Table.Cell > {
            organismes.courriel
          } < /Table.Cell> <
          /Table.Row>
        )
      } <
      /Table.Body> <
      /Table>
    )
  }
}
