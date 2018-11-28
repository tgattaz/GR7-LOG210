import React from "react";
import ServiceForm from "../../forms/basicForms/ServiceForm";
import MenuAllForm from "../../forms/menuForms/MenuAllForm";

class ServicePage extends React.Component {
  //submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

  render() {
    return (
      <div>
        <h1>Liste des services</h1>
        <MenuAllForm />
        <ServiceForm />
      </div>
    );
  }
}

export default ServicePage;
