import React from "react";
import DelRefForm from "../../forms/deleteForms/DelRefFrom.js";
import MenuAllForm from "../../forms/menuForms/MenuAllForm";

class DelRefPage extends React.Component {
  // submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

  render() {
    return <div>
        <h1>Retirer un referent</h1>
      <MenuAllForm />
       < DelRefForm / >
      </div>;
  }
}

export default DelRefPage;
 // 