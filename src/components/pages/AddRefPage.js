import React from "react";
import AddRefForm from "../forms/AddRefForm";
import OrgaRefForm from "../forms/OrgaRefForm";
import MenuAllForm from "../forms/MenuAllForm";

class AddRefPage extends React.Component {
  //submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

  render() {
    return <div>
        <h1>Liste des organismes référents</h1>
      <MenuAllForm />
        <AddRefForm />
      </div>;
  }
}

export default AddRefPage;
