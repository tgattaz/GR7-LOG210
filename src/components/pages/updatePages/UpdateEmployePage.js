import React from "react";
import MenuAllForm from "../../forms/menuForms/MenuAllForm";
import UpdateEmployeForm from "../../forms/updateForms/UpdateEmployeForm";

class UpdateEmployePage extends React.Component {
    //submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

    render() {
        return (<div >
            <h1> sélectionner un employe à modifier   </h1 >
            <MenuAllForm />
            < UpdateEmployeForm />

        </div>)
    }
}
export default UpdateEmployePage;