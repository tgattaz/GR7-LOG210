import React from "react";
import MenuAllForm from "../../forms/menuForms/MenuAllForm";
import RechercheReferentForm from "../../forms/selectionForms/RechercheReferentForm";

class RechercheReferentPage extends React.Component {
  //submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

  render() {
    return <div>
        <h1>Recherche des référents</h1>
        <MenuAllForm />
        <RechercheReferentForm />
      </div>;
  }
}

export default RechercheReferentPage;
