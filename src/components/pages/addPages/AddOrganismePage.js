import React from "react";
import AddOrganismeForm from "../../forms/addOrUpdateForms/AddOrganismeForm";
import MenuAllForm from "../../forms/menuForms/MenuAllForm";

class AddOrganismePage extends React.Component {
    //submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

    render() {
        return <div>
            < h2 > Ajouter ou modifier un organisme </h2>
            <MenuAllForm />
            <AddOrganismeForm />
            <br />
        </div>;
    }
}

export default AddOrganismePage;
