import React from "react";
import { Button, Table } from "semantic-ui-react";
import axios from "axios";
import AddOrgaRefForm from "../addOrUpdateForms/AddOrgaRefForm";

export default class UpdateOrganismeRefFrom extends React.Component {
  state = {
    organismes_referents: [],
    modifierOrgaRef: "",
    redirectionPourModification: false
  };
  siLeChoixEstFaitEnregisterEtChangerDePage = e => {
    this.setState({
      modifierOrgaRef: e.target.innerHTML,
      redirectionPourModification: true
    });
  };

  componentDidMount() {
    axios.get("/organismes_referents").then(res => {
      this.setState({
        organismes_referents: res.data
      });
    });
  }

  render() {
    if (this.state.redirectionPourModification === true) {
      return (
        <div>
          <AddOrgaRefForm modifierOrgaRef={this.state.modifierOrgaRef} />
        </div>
      );
    } else {
      return (
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell> Choisir </Table.HeaderCell>
              <Table.HeaderCell singleLine>Numéro Oraganisme</Table.HeaderCell>
              <Table.HeaderCell> Nom organisme réferent </Table.HeaderCell>
              <Table.HeaderCell> Numéro Civique </Table.HeaderCell>
              <Table.HeaderCell> Rue </Table.HeaderCell>
              <Table.HeaderCell> Ville </Table.HeaderCell>
              <Table.HeaderCell> Province </Table.HeaderCell>
              <Table.HeaderCell> Code Postal </Table.HeaderCell>
              <Table.HeaderCell> Télephone Bureau </Table.HeaderCell>
              <Table.HeaderCell> Fax </Table.HeaderCell>
              <Table.HeaderCell> Courriel </Table.HeaderCell>
              <Table.HeaderCell> Site Web </Table.HeaderCell>
              <Table.HeaderCell> Etat </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.state.organismes_referents.map(organismes_referents => (
              <Table.Row key={organismes_referents.noOrganismeReferent}>
                <Table.Cell>
                  <Button
                    onClick={e =>
                      this.siLeChoixEstFaitEnregisterEtChangerDePage(e)
                    }
                  >
                    {organismes_referents.noOrganismeReferent}
                  </Button>
                </Table.Cell>
                <Table.Cell>
                  {organismes_referents.noOrganismeReferent}
                </Table.Cell>
                <Table.Cell> {organismes_referents.nom} </Table.Cell>
                <Table.Cell> {organismes_referents.noCivique} </Table.Cell>
                <Table.Cell> {organismes_referents.rue} </Table.Cell>
                <Table.Cell> {organismes_referents.ville} </Table.Cell>
                <Table.Cell> {organismes_referents.province} </Table.Cell>
                <Table.Cell> {organismes_referents.codePostal} </Table.Cell>
                <Table.Cell>{organismes_referents.telephoneBureau}</Table.Cell>
                <Table.Cell> {organismes_referents.fax} </Table.Cell>
                <Table.Cell> {organismes_referents.curriel} </Table.Cell>
                <Table.Cell> {organismes_referents.siteWeb} </Table.Cell>
                <Table.Cell> {organismes_referents.etat} </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      );
    }
  }
}
