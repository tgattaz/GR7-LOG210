import React from "react";
import OrgaRefForm from "../forms/OrgaRefForm";
import MenuForm from "../forms/MenuForm";

class OrgaRefPage extends React.Component{
    //submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

    render(){
        return(
            <div>
                <h1>Liste des organismes référents</h1>
                <MenuForm/>
                <OrgaRefForm/>
            </div>
        );
    }
}

export default OrgaRefPage;
