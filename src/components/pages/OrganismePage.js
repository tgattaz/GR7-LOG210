import React from "react";
//import OrganismeForm from "../forms/OrganismeForm";
import MenuForm from "../forms/MenuForm";

class OrgaPage extends React.Component{
    //submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

    render(){
        return(
            <div>
                <h1>Liste des organismes</h1>
                <MenuForm/>
            </div>
        );
    }
}

export default OrgaPage;
