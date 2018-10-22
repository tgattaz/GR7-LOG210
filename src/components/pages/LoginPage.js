import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from "../forms/LoginForm";
import { login } from "../../actions/auth";
import { Menu } from 'semantic-ui-react';
import { Link } from "react-router-dom";
class LoginPage extends React.Component{
    submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));
    
    render(){
        return(
            <div>
                <h1>Login Page</h1>
                <Menu pointing secondary>
                    <Menu.Item
                        as={Link}
                        name='home'
                        to="/"/>
                </Menu>
                  
                <LoginForm submit={this.submit}/>
            </div>
        );
    }
}

LoginPage.prototypes= {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
};

export default connect(null,{ login })(LoginPage);