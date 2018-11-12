import React from "react";
import MenuAllForm from "../../forms/menuForms/MenuAllForm";
import RechercherFamilleForm from "../../forms/selectionForms/RechercherFamilleForm";

class RechercheFamillePage extends React.Component {
  //submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

  render() {
    return (
      <div>
        <h1>Recherche des famille</h1>
        <MenuAllForm />
        <RechercherFamilleForm />
      </div>
    );
  }
}

export default RechercheFamillePage;
