import React from "react";
import AddEmployeForm from "../../forms/addOrUpdateForms/AddEmployeForm";
import MenuAllForm from "../../forms/menuForms/MenuAllForm";

class AddEmployePage extends React.Component{
    //submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));
    
    render(){
        return(
            <div>
                < h2 > Ajouter ou modifier un employé < /h2>
                <MenuAllForm/>
                <br/>
                <AddEmployeForm/>
            </div>
        );
    }
}

export default AddEmployePage;