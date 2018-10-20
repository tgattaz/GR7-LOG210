import React from "react";
import EmployeForm from "../forms/EmployeForm";
import MenuForm from "../forms/MenuForm";

class EmployePage extends React.Component{
    //submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

    render(){
        return(
            <div>
                <h1>Test</h1>
                <MenuForm/>
                <EmployeForm/>
                <h1>Bonjour.</h1>
            </div>
        );
    }
}

export default EmployePage;
