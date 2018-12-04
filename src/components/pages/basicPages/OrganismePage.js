import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MenuAllForm from "../../forms/menuForms/MenuAllForm";
import OrganismeForm from "../../forms/basicForms/OrganismeForm";
import { getOrga } from "../../../actions/selectOrganisme";
class OrgaPage extends React.Component{
    submit = (data) => this.props.getOrga(data).then(() => this.props.history.push("/"+data.type));

    render(){
        return(
            <div>
                <h1>Liste des organismes</h1>
                <MenuAllForm/>
                <OrganismeForm submit={this.submit}/>
            </div>
        );
    }
}

OrgaPage.prototypes={
    history: PropTypes.shape({
        push:PropTypes.func.isRequired
    }).isRequired,
    getOrga: PropTypes.func.isRequired
}

export default connect(null,{ getOrga })(OrgaPage);
