import React from "react";
import { Menu, Dropdown } from 'semantic-ui-react';
import { Link } from "react-router-dom";

class MenuForm extends React.Component {

  state = { activeItem: "" }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });


  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            as={Link}
            name='home'
            to="/"
            active={activeItem === 'home'}
            onClick={this.handleItemClick} />
          <Menu.Item
            as={Link}
            name='login'
            to="/login"
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
          />
          <Dropdown item text='employe'>
            <Dropdown.Menu>
              <Dropdown.Item as={Link}
                name='employe'
                to="/employes"
                active={activeItem === 'employe'}
                onClick={this.handleItemClick}>Liste des employes</Dropdown.Item>
              <Dropdown.Item as={Link}
                name='addEmploye'
                to="/addEmploye"
                active={activeItem === 'addEmploye'}
                onClick={this.handleItemClick}>Ajouter un employe</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text='organismes référents'>
            <Dropdown.Menu>
              <Dropdown.Item as={Link}
                name='OrgaRef'
                to="/OrgaRef"
                active={activeItem === 'OrgaRef'}
                onClick={this.handleItemClick}>Liste des organismes référents</Dropdown.Item>
              <Dropdown.Item as={Link}
                name='addOrgaRef'
                to="/addOrgaRef"
                active={activeItem === 'addOrgaRef'}
                onClick={this.handleItemClick}>Ajouter un organisme référent</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text='Gérer les référents'>
            <Dropdown.Menu>
              <Dropdown.Item as={Link}
                name='OrgaRef'
                to="/OrgaRef"
                active={activeItem === 'OrgaRef'}
                onClick={this.handleItemClick}>Choisir un organisme référent</Dropdown.Item>
              <Dropdown.Item as={Link}
                name='addRef'
                to="/addRef"
                active={activeItem === 'addRef'}
                onClick={this.handleItemClick}>Ajouter référent a l 'organisme</Dropdown.Item>
              <Dropdown.Item as={Link}
                name='Ref'
                to="/Ref"
                active={activeItem === 'Ref'}
                onClick={this.handleItemClick}>Liste des referents</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item
            as={Link}
            name='rechercheReferent'
            to="/rechercheReferent"
            active={activeItem === 'rechercheReferent'}
            onClick={this.handleItemClick} />
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
