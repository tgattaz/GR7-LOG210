import React from "react";
import PropTypes from "prop-types";
import MenuHomeForm from "../forms/MenuHomeForm";
import MenuAllForm from "../forms/MenuAllForm";
import { connect } from "react-redux";
import * as actions from '../../actions/auth';
import { Menu , Dropdown } from 'semantic-ui-react';
const HomePage = ({isAuthenticated,logout}) => (
    <div>
        <h1>Home Page</h1>
        {!isAuthenticated?
            <MenuHomeForm/>
              :
            <Menu pointing secondary>  
                <MenuAllForm/>
            
                <Menu.Menu position='right'>
                    <Menu.Item
                    name='logout'
                    onClick={()=> logout()}
                    />
                </Menu.Menu>
            </Menu>
        }
    </div>
);

HomePage.protoTypes ={
    isAuthenticated:PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
}
function mapStateToProps(state){
    return {
        isAuthenticated:!!state.user.token
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