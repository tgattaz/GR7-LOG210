import React from "react";
import PropTypes from "prop-types";
import MenuHomeForm from "../forms/MenuHomeForm";
import { connect } from "react-redux";
import * as actions from '../../actions/auth';
import MenuAllForm from "../forms/MenuAllForm";
const HomePage = ({isAuthenticated}) => (
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