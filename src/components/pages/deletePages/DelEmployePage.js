import React from "react";
import DelEmployeForm from "../../forms/deleteForms/DelEmployeForm.js";
import MenuAllForm from "../../forms/menuForms/MenuAllForm";

class DelEmployePage extends React.Component {
  // submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

  render() {
    return <div>
      <h1>Retirer un employe</h1>
      <MenuAllForm />
      < DelEmployeForm />
    </div>;
  }
}

export default DelEmployePage;
 // 