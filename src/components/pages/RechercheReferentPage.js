import React from "react";
import MenuForm from "../forms/MenuForm";
import RechercheReferentForm from "../forms/RechercheReferentForm";

class OrgaRefPage extends React.Component{
    //submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

    render(){
        return(
            <div>
                <h1>Recherche des référents</h1>
                <MenuForm/>
                <RechercheReferentForm/>
            </div>
        );
    }
}

export default OrgaRefPage;
