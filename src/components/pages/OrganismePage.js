import React from "react";
//import OrganismeForm from "../forms/OrganismeForm";
import MenuAllForm from "../forms/MenuAllForm";

class OrgaPage extends React.Component{
    //submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

    render(){
        return <div>
            <h1>Liste des organismes</h1>
            <MenuAllForm />
          </div>;
    }
}

export default OrgaPage;
