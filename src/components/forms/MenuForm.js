import React from "react";
import { Menu } from 'semantic-ui-react';
import { Link } from "react-router-dom";

class MenuForm extends React.Component{

    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    

    render(){
        const { activeItem }=this.state;
        return (
            <div>
              <Menu pointing secondary>
                <Menu.Item 
                  as={Link} 
                  name='home' 
                  to="/" 
                  active={activeItem === 'home'} 
                  onClick={this.handleItemClick}/>
                <Menu.Item
                  as={Link}
                  name='login'
                  to="/login"
                  active={activeItem === 'login'}
                  onClick={this.handleItemClick}
                />
              </Menu>
           </div>
        );
    }
}
/*
  <Menu.Menu position='right'>
                  <Menu.Item
                    name='logout'
                    active={activeItem === 'logout'}
                    onClick={this.handleItemClick}
                  />
                </Menu.Menu>
*/
export default MenuForm;