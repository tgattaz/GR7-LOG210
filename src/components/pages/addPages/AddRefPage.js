import React from "react";
import AddRefForm from "../../forms/addOrUpdateForms/AddRefForm";
import MenuAllForm from "../../forms/menuForms/MenuAllForm";

class AddRefPage extends React.Component {
  //submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

  render() {
    return <div>
        < h1 > Ajouter ou modifier un organismes référents </h1>
      <MenuAllForm />
        <AddRefForm />
      </div>;
  }
}

export default AddRefPage;
