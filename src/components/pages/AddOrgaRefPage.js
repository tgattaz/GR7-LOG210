import React from "react";
import AddOrgaRefForm from "../forms/AddOrgaRefForm";
import MenuAllForm from "../forms/MenuAllForm";

class AddOrgaRefPage extends React.Component{
    //submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

    render(){
        return(
            <div>
                <h2>Ajouter un organisme référent</h2>
                <MenuAllForm/>
                <br/>
                <AddOrgaRefForm/>
            </div>
        );
    }
}

export default AddOrgaRefPage;
