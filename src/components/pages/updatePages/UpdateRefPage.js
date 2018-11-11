import React from "react";
import MenuAllForm from "../../forms/menuForms/MenuAllForm";
import UpdateRefForm from "../../forms/updateForms/UpdateRefForm";

class UpdateRefPage extends React.Component {
  //submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

  render() {
    return (<div >
      <h1> selectionner un referent a modifier   </h1 >
      <MenuAllForm />
      < UpdateRefForm />

    </div>)
  }
}
export default UpdateRefPage;