import React from "react";
//import AddOrganismeForm from "../forms/AddOrganismeForm";
import MenuForm from "../forms/MenuForm";

class AddOrganismePage extends React.Component{
    //submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

    render(){
        return <div>
            <h2>Ajouter un organisme</h2>
            <MenuAllForm />
            <br />
          </div>;
    }
}

export default AddOrganismePage;
