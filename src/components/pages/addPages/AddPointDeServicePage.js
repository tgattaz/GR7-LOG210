import React from "react";
import PropTypes from "prop-types";
import AddPointDeServiceForm from "../../forms/addOrUpdateForms/AddPointDeServiceForm";
import MenuAllForm from "../../forms/menuForms/MenuAllForm";
import { connect } from "react-redux";
import { insertPointDeService } from "../../../actions/pointDeService";

class AddPointDeServicePage extends React.Component {
    submit = (data) => this.props.insertPointDeService(data).then(() => this.props.history.push("/pointDeservice"));

    render() {
        const nomOrganisme=this.props.nomOrganisme;
        return (
            <div>
                < h2 > Ajouter un point de service à l'organisme {nomOrganisme}</h2>
                <MenuAllForm />
                <br />
                <AddPointDeServiceForm submit={this.submit}/>
            </div>
        );
    }
}
AddPointDeServicePage.protoTypes ={
    nomOrganisme:PropTypes.string.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    insertPointDeService: PropTypes.func.isRequired
}

function mapStateToProps(state){
    return {
        nomOrganisme:state.organisme.nom
    }
}

export default connect(mapStateToProps,{ insertPointDeService })(AddPointDeServicePage);