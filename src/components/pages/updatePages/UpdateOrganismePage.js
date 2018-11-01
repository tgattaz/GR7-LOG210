import React from "react";
import MenuAllForm from "../../forms/menuForms/MenuAllForm";
import UpdateOrganismeForm from "../../forms/updateForms/UpdateOrganismeForm";

class UpdateOrganismePage extends React.Component {
    //submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

    render() {
      return ( < div >
        <
        h1 > selectionner un referent a modifier < /h1 > <
        MenuAllForm / >
        <UpdateOrganismeForm / >

        <
        /div>)
      }
    }
    export default UpdateOrganismePage;