import React from "react";
import AddEmployeForm from "../forms/AddEmployeForm";
import MenuForm from "../forms/MenuForm";

class AddEmployePage extends React.Component{
    //submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));
    
    render(){
        return(
            <div>
                <h2>Ajouter un employé</h2>
                <MenuForm/>
                <br/>
                <AddEmployeForm/>
            </div>
        );
    }
}

export default AddEmployePage;