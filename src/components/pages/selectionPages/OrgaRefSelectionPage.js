import React from "react";
import OrgaRefSelectionForm from "../../forms/selectionForms/OrgaRefSelectionForm";
import MenuAllForm from "../../forms/menuForms/MenuAllForm";

class OrgaRefSelectionPage extends React.Component {
    //submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

    render(){
        return(
            <div>
                <h1>Liste des organismes référents</h1>
                <MenuAllForm/>
        < OrgaRefSelectionForm / >
            </div>
        );
    }
}

export default OrgaRefSelectionPage;
//