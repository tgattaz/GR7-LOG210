import React from "react";
import EmployeForm from "../forms/EmployeForm";
import MenuAllForm from "../forms/MenuAllForm";

class EmployePage extends React.Component{
    //submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));
    
    render(){
        return(
            <div>
                <h1>Liste des employés</h1>
                <MenuAllForm/>
                <EmployeForm/>
            </div>
        );
    }
}

export default EmployePage;