import React from "react";
import AddEmployeOrgaForm from "../../forms/addOrUpdateForms/AddEmployeOrgaForm";
import MenuAllForm from "../../forms/menuForms/MenuAllForm";

class addEmployeOrgaPage extends React.Component {
    //submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

    render(){
        return(
            <div>
                <h1>Liste des organismes</h1>
                <MenuAllForm/>
                < AddEmployeOrgaForm / >
            </div>
        );
    }
}

export default addEmployeOrgaPage;
//
