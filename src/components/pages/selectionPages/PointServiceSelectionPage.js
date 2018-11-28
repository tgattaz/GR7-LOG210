import React from "react";
import PointServiceSelectionForm from "../../forms/selectionForms/PointServiceSelectionForm";
import MenuAllForm from "../../forms/menuForms/MenuAllForm";

class PointServiceSelectionPage extends React.Component {
    //submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

    render(){
        return(
            <div>
                <h1>Liste des points des services</h1>
                <MenuAllForm/>
        < PointServiceSelectionForm />
            </div>
        );
    }
}
export default PointServiceSelectionPage;
