import React from 'react';
import {
  Table,
  Button
} from 'semantic-ui-react';
import axios from 'axios';
import AddRefForm from "../addOrUpdateForms/AddRefForm";

export default class UpdateRefForm extends React.Component {
  state = {
    referents: [],
    modifierRef: '',
    redirectionPourModification: false,
  };

  siLeChoixEstFaitEnregisterEtChangerDePage = (e) => {
    this.setState({
      modifierRef: e.target.innerHTML,
      redirectionPourModification: true
    })
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
    if (this.state.redirectionPourModification === true) {
      return (<div>
        <AddRefForm modifierRef = {
          this.state.modifierRef
        }
        />
        </div> 
        
      )

    } else {
    return (<Table celled padded >
      <
      Table.Header >
      <
      Table.Row >
      <
      Table.HeaderCell singleLine > Numéro referent < /Table.HeaderCell>
      <Table.HeaderCell > Choisir < /Table.HeaderCell> 
      <
      Table.HeaderCell > Nom < /Table.HeaderCell> <
      Table.HeaderCell > Prénom < /Table.HeaderCell> <
      Table.HeaderCell > Titre < /Table.HeaderCell> <
      Table.HeaderCell > Telephone cellulaire < /Table.HeaderCell> <
      Table.HeaderCell > Telephone de bureau < /Table.HeaderCell> <
      Table.HeaderCell > Fax < /Table.HeaderCell> <
      Table.HeaderCell > Préférence < /Table.HeaderCell> <
      Table.HeaderCell > Email < /Table.HeaderCell> <
      /Table.Row> <
      /Table.Header>

      <
      Table.Body > {
        this.state.referents.map(referent => ( <
          Table.Row key = {
            referent.noReferent
          } >
          <
          Table.Cell >
            <
            Button
          onClick = {
              (e) => this.siLeChoixEstFaitEnregisterEtChangerDePage(e)
            } > {
              referent.noReferent
            } < /Button> < /
            Table.Cell >
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
      /Table>        )
      }

      }
      }