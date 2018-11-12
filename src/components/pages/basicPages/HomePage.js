import React from "react";
import PropTypes from "prop-types";
import MenuHomeForm from "../../forms/menuForms/MenuHomeForm";
import { connect } from "react-redux";
<<<<<<< HEAD:src/components/pages/HomePage.js
import * as actions from '../../actions/auth';
import MenuAllForm from "../forms/MenuAllForm";
const HomePage = ({isAuthenticated}) => (
=======
import * as actions from '../../../actions/auth';
import { Menu , Dropdown } from 'semantic-ui-react';
import MenuAllForm from "../../forms/menuForms/MenuAllForm";
const HomePage = ({isAuthenticated,role,logout}) => (
>>>>>>> 6c564ab3603f321897acdc7f73354a54cdf4d5ff:src/components/pages/basicPages/HomePage.js
    <div>
        <h1>Home Page</h1>
        {!isAuthenticated?
            <MenuHomeForm/>
              :
              <div>
                  
                <MenuAllForm/>
                  
            </div>
        }
    </div>
);

HomePage.protoTypes ={
    isAuthenticated:PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
    role:PropTypes.number.isRequired
}
function mapStateToProps(state){
    return {
        isAuthenticated:!!state.user.token,
        role:state.user.role
    }
}
export default connect(mapStateToProps,{ logout: actions.logout })(HomePage);

/*
<Link to="/login">Login</Link>
        <Link to="/employes">Liste des employes</Link>

<Menu.Item
    as={Link}
    name='home'
    to="/"/>
*/