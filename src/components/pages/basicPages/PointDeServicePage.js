import React from "react";
import PropTypes from "prop-types";
import PointDeServiceForm from "../../forms/basicForms/PointDeServiceForm";
import MenuAllForm from "../../forms/menuForms/MenuAllForm";
import { connect } from "react-redux";

class PointDeServicePage extends React.Component{
    submit = () => this.props.history.push("/addPointDeService");
    
    render(){
        const nomOrganisme=this.props.nomOrganisme;
        return(
            <div>
                <h1>Liste des points de service de l'organisme {nomOrganisme}</h1>
                <MenuAllForm/>
                <PointDeServiceForm submit={this.submit}/>
            </div>
        );
    }
}
PointDeServicePage.protoTypes ={
    nomOrganisme:PropTypes.string.isRequired,
    history: PropTypes.shape({
        push:PropTypes.func.isRequired
    }).isRequired
}

function mapStateToProps(state){
    return {
        nomOrganisme:state.organisme.nom
    }
}
export default connect(mapStateToProps)(PointDeServicePage);