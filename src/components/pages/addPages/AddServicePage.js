import React from "react";
import AddServiceForm from "../../forms/addOrUpdateForms/AddServiceForm";
import MenuAllForm from "../../forms/menuForms/MenuAllForm";

class AddServicePage extends React.Component {
  //submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

  render() {
    return <div>
        < h1 > Ajouter un service </h1>
      <MenuAllForm />
        <AddServiceForm />
      </div>;
  }
}
export default AddServicePage;
