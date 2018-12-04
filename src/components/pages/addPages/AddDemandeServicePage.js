import React from "react";
import AddDemandeServiceForm from "../../forms/addOrUpdateForms/AddDemandeServiceForm";
import MenuAllForm from "../../forms/menuForms/MenuAllForm";

class AddDemandeServicePage extends React.Component {
    //submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

    render() {
        return (
            <div>
                <h2>Créer une demande de service</h2>
                <MenuAllForm />
                <br />
                <AddDemandeServiceForm />
            </div>
        );
    }
}

export default AddDemandeServicePage;