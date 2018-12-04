import React from "react";
import MenuAllForm from "../../forms/menuForms/MenuAllForm";
import DemandeServiceSelectionForm from "../../forms/selectionForms/DemandeServiceSelectionForm";

class DemandeServiceSelectionPage extends React.Component {
    //submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

    render() {
        return (
            <div>
                <h1>Liste des demandes de service</h1>
                <MenuAllForm />
                <DemandeServiceSelectionForm />
            </div>
        );
    }
}

export default DemandeServiceSelectionPage;
//