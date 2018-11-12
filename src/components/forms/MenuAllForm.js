import React from "react";
import { Menu, Dropdown } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from '../../actions/auth';
import PropTypes from "prop-types";
const MenuAllForm =({role,logout})=> (
        <Menu pointing secondary> 
          <Menu.Item
            as={Link}
            name='home'
            to="/" />
            {role!==4 &&
          <Dropdown item text='employe'>
            <Dropdown.Menu>
              <Dropdown.Item as={Link}
                name='employe'
                to="/employes">Liste des employes</Dropdown.Item>
              <Dropdown.Item as={Link}
                name='addEmploye'
                to="/addEmploye">Ajouter un employe</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
            }
            {role===1 &&
          <Dropdown item text='organismes'>
            <Dropdown.Menu>
              <Dropdown.Item as={Link}
                name='Organisme'
                to="/Organisme">Liste des organismes </Dropdown.Item>
              <Dropdown.Item as={Link}
                name='addOrganisme'
                to="/addOrganisme">Ajouter un organisme </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
            }
          <Dropdown item text='organismes référents'>
            <Dropdown.Menu>
              <Dropdown.Item as={Link}
                name='OrgaRef'
                to="/OrgaRef">Liste des organismes référents</Dropdown.Item>
              <Dropdown.Item as={Link}
                name='addOrgaRef'
                to="/addOrgaRef">Ajouter un organisme référent</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text='Gérer les référents'>
            <Dropdown.Menu>
              <Dropdown.Item as={Link}
                name='OrgaRef'
                to="/OrgaRef">Choisir un organisme référent</Dropdown.Item>
              <Dropdown.Item as={Link}
                name='addRef'
                to="/addRef">Ajouter référent a l 'organisme</Dropdown.Item>
              <Dropdown.Item as={Link}
                name='Ref'
                to="/Ref">Liste des referents</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item
            as={Link}
            name='rechercheReferent'
            to="/rechercheReferent" />
            <Menu.Menu position='right'>
                <Menu.Item
                as={Link}
                name='logout'
                to="/"
                onClick={()=> logout()}
                />
            </Menu.Menu>
        </Menu>
   
);
MenuAllForm.protoTypes ={
  logout: PropTypes.func.isRequired,
  role:PropTypes.number.isRequired
}
function mapStateToProps(state){
  return {
      role:state.user.role
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
export default connect(mapStateToProps,{logout: actions.logout})(MenuAllForm);
