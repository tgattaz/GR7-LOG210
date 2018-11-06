import React from "react";
import MenuAllForm from "../../forms/menuForms/MenuAllForm";
import UpdateOrganismeRefFrom from "../../forms/updateForms/UpdateOrganismeRefFrom";

class UpdateOrganismeRefPage extends React.Component {
  //submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

  render() {
    return (< div >
      <h1 > selectionner un organisme referent a modifier </h1 >
      <MenuAllForm />
      <UpdateOrganismeRefFrom />

    </div>)
  }
}
export default UpdateOrganismeRefPage;