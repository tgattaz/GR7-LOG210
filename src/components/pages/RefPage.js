import React from "react";
import RefForm from "../forms/RefForm";
import MenuForm from "../forms/MenuForm";

class RefPage extends React.Component {
  //submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

  render() {
    return <div>
        <h1>Liste des référents</h1>
        <MenuForm />
        <RefForm />
      </div>;
  }
}

export default RefPage;