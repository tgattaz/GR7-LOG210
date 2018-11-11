import React from "react";
import DelOrganismeFrom from "../../forms/deleteForms/DelOrganismeFrom";
import MenuAllForm from "../../forms/menuForms/MenuAllForm";


class DelOrganismePage extends React.Component {
  // submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

  render() {
    return <div >
      <h1> Retirer un referent </h1>
      <MenuAllForm />
      <DelOrganismeFrom />
    </div>;
  }
}

export default DelOrganismePage;