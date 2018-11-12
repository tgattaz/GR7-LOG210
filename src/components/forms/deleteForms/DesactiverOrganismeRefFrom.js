import React from 'react';
import axios from 'axios';
import {
  Table,
  Button
} from 'semantic-ui-react';
import {
  Redirect
} from 'react-router';

export default class DesactiverOrganismeRefFrom extends React.Component {
  state = {
    organismes_referents: [],
    noOrganismeReferent: '',
    toOrganimeReferent: false,
  };
  selectChannel = (e) => {
    e.preventDefault();
    alert(e.target.innerHTML);
    this.setState({
      noOrganismeReferent: e.target.innerHTML
    });
    alert(`Vous avez desactivé l'organisme referent avec le numero : ${e.target.innerHTML}`);

    const selection = {
      noOrganismeReferent: e.target.innerHTML
    };
    axios.post('/desactiverOrganismeRef', {
      selection
    }).then(res => {
      console.log(res);
      console.log(res.data);
    }).then(() => this.setState(() => ({
      toOrganimeReferent: true
    })));
  }

  componentDidMount() {
    axios.get('/organismes_referents').then(res => {
      this.setState({
        organismes_referents: res.data
      });
    });
  }

  render() {
    if (this.state.toOrganimeReferent === true) {
      return <Redirect to='OrgaRef' />
    }
    return (
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell > Choisir </Table.HeaderCell>
            <Table.HeaderCell singleLine > Numero </Table.HeaderCell>
            <Table.HeaderCell > Nom organisme réferent </Table.HeaderCell>
            <Table.HeaderCell > Numéro Civique </Table.HeaderCell>
            <Table.HeaderCell > Rue </Table.HeaderCell>
            <Table.HeaderCell > Ville </Table.HeaderCell>
            <Table.HeaderCell > Province </Table.HeaderCell>
            <Table.HeaderCell > Code Postal </Table.HeaderCell>
            <Table.HeaderCell > Télephone Bureau </Table.HeaderCell>
            <Table.HeaderCell > Fax </Table.HeaderCell>
            <Table.HeaderCell > Courriel </Table.HeaderCell>
            <Table.HeaderCell > Site Web </Table.HeaderCell>
            <Table.HeaderCell > Etat </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body >
          {this.state.organismes_referents.map(organismes_referents =>
            <Table.Row
              key={organismes_referents.noOrganismeReferent}
            >
              < Table.Cell >
                {
                  <Button onClick={
                    (e) => this.selectChannel(e)
                  } > {
                      organismes_referents.noOrganismeReferent
                    } </Button>
                }
              </Table.Cell>

              <Table.Cell > {
                organismes_referents.noOrganismeReferent
              } </Table.Cell>
              <Table.Cell > {
                organismes_referents.nom
              } </Table.Cell>
              <Table.Cell > {
                organismes_referents.noCivique
              } </Table.Cell>
              <Table.Cell > {
                organismes_referents.rue
              } </Table.Cell>
              <Table.Cell > {
                organismes_referents.ville
              } </Table.Cell>
              <Table.Cell > {
                organismes_referents.province
              } </Table.Cell>
              <Table.Cell > {
                organismes_referents.codePostal
              } </Table.Cell>
              <Table.Cell > {
                organismes_referents.telephoneBureau
              } </Table.Cell>
              <Table.Cell > {
                organismes_referents.fax
              } </Table.Cell>
              <Table.Cell > {
                organismes_referents.curriel
              } </Table.Cell>
              <Table.Cell> {
                organismes_referents.siteWeb
              } </Table.Cell>
              <Table.Cell > {
                organismes_referents.etat
              } </Table.Cell>
            </Table.Row>
          )
          }
        </Table.Body>
      </Table>
    )
  }
}
