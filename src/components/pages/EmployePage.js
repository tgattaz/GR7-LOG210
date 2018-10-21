import React from "react";
import EmployeForm from "../forms/EmployeForm";
import MenuForm from "../forms/MenuForm";

class EmployePage extends React.Component{
    //submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));
    
    render(){
        return(
            <div>
                <h1>Liste des employés</h1>
                <MenuForm/>
                <EmployeForm/>
            </div>
        );
    }
}

export default EmployePage;