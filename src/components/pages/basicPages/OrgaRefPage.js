import React from "react";
import OrgaRefForm from "../../forms/basicForms/OrgaRefForm";
import MenuAllForm from "../../forms/menuForms/MenuAllForm";

class OrgaRefPage extends React.Component{
    //submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

    render(){
        return(
            <div>
                <h1>Liste des organismes référents</h1>
                <MenuAllForm/>
                <OrgaRefForm/>
            </div>
        );
    }
}

export default OrgaRefPage;
