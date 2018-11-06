import React from "react";
import DesactiverOrganismeRefFrom from "../../forms/deleteForms/DesactiverOrganismeRefFrom";
import MenuAllForm from "../../forms/menuForms/MenuAllForm";

class DesactiverOraganismeRefPage extends React.Component {
  // submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

  render() {
    return <div >
      <h1> Desactiver un organisme referent </h1>
      <MenuAllForm />
      <DesactiverOrganismeRefFrom />
    </div>;
  }
}

export default DesactiverOraganismeRefPage;
//