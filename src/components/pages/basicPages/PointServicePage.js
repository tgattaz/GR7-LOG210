import React from "react";
import PointServiceForm from "../../forms/basicForms/PointServiceForm";
import MenuAllForm from "../../forms/menuForms/MenuAllForm";

class PointServicePage extends React.Component{
    //submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

    render(){
        return(
            <div>
                <h1>Liste des points de services</h1>
                <MenuAllForm/>
                <PointServiceForm/>
            </div>
        );
    }
}

export default PointServicePage;
