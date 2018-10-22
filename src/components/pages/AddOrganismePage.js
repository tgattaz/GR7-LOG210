import React from "react";
//import AddOrganismeForm from "../forms/AddOrganismeForm";
import MenuAllForm from "../forms/MenuAllForm";

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
