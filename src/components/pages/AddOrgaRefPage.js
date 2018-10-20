import React from "react";
import AddOrgaRefForm from "../forms/AddOrgaRefForm";
import MenuForm from "../forms/MenuForm";

class AddOrgaRefPage extends React.Component{
    //submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

    render(){
        return(
            <div>
                <h2>Ajouter un organisme référent</h2>
                <MenuForm/>
                <br/>
                <AddOrgaRefForm/>
            </div>
        );
    }
}

export default AddOrgaRefPage;
