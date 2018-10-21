import React from "react";
import { Menu } from 'semantic-ui-react';
import { Link } from "react-router-dom";
class MenuHomeForm extends React.Component{

    render(){
        return (
            <div>
              <Menu pointing secondary>
                  <Menu.Item
                    as={Link}
                    name='login'
                    to="/login"/>
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
export default MenuHomeForm;
