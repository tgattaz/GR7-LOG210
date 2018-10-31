import React from "react";
import PropTypes from "prop-types";
import MenuHomeForm from "../../forms/menuForms/MenuHomeForm";
import { connect } from "react-redux";
import * as actions from '../../../actions/auth';
import { Menu , Dropdown } from 'semantic-ui-react';
import MenuAllForm from "../../forms/menuForms/MenuAllForm";
const HomePage = ({isAuthenticated,role,logout}) => (
    <div>
        <h1>Home Page</h1>
        {!isAuthenticated?
            <MenuHomeForm/>
              :
              <div>
                  {role===1?
                <Menu pointing secondary> 
                    <MenuAllForm/>
                        
                    <Menu.Menu position='right'>
                        <Menu.Item
                        name='logout'
                        onClick={()=> logout()}
                        />
                    </Menu.Menu>

                </Menu>
                :
                <Menu pointing secondary>
                    <Menu.Menu position='right'>
                        <Menu.Item
                        name='logout'
                        onClick={()=> logout()}
                        />
                    </Menu.Menu>
                </Menu>
                }
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