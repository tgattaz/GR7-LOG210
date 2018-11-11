import React from "react";
import { Menu, Dropdown } from 'semantic-ui-react';
import { Link } from "react-router-dom";
class MenuAllForm extends React.Component {

  render() {
    return (
      <div>
        <Menu secondary>
          <Menu.Item
            as={Link}
            name='home'
            to="/" />
          <Dropdown item text='employe'>
            <Dropdown.Menu>
              <Dropdown.Item as={Link}
                name='employe'
                to="/employes">Liste des employes</Dropdown.Item>
              <Dropdown.Item as={Link}
                name='addEmploye'
                to="/addEmploye" > Ajouter ou modifier un employe </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text='organismes'>
            <Dropdown.Menu>
              <Dropdown.Item as={Link}
                name='Organisme'
                to="/Organisme">Liste des organismes </Dropdown.Item>
              <Dropdown.Item as={Link}
                name='addOrganisme'
                to="/addOrganisme" > Ajouter ou modifier un organisme </Dropdown.Item>
              < Dropdown.Item as={
                Link
              }
                name='delOrganisme'
                to="/delOrganisme" > Retirer un organisme </Dropdown.Item>
              < Dropdown.Item as={
                Link
              }
                name='updateOrganisme'
                to="/updateOrganisme" > Mettre a jours un organisme </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text='organismes référents'>
            <Dropdown.Menu>
              <Dropdown.Item as={Link}
                name='OrgaRef'
                to="/OrgaRef">Liste des organismes référents</Dropdown.Item>
              <Dropdown.Item as={Link}
                name='addOrgaRef'
                to="/addOrgaRef" > Ajouter un organisme référent </Dropdown.Item>
              < Dropdown.Item as={
                Link
              }
                name='updateOrgaRef'
                to="/updateOrgaRef" > Modifier un organisme référent </Dropdown.Item>
              < Dropdown.Item as={
                Link
              }
                name='desactiverOrgaRef'
                to="/desactiverOrgaRef" > Desactiver un organisme un organisme référent </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text='Gérer les référents'>
            <Dropdown.Menu>
              <Dropdown.Item as={Link}
                name='OrgaRefSelection'
                to="/OrgaRefSelection" > Choisir un organisme référent pour y ajouter un employe </Dropdown.Item>
              <Dropdown.Item as={Link}
                name='updateRef'
                to="/updateRef" > modifier un référent </Dropdown.Item>
              < Dropdown.Item as={Link} name='updateRef'
                to="/delRef" > Retirer le réferent choisi</Dropdown.Item>
              <Dropdown.Item as={Link}
                name='Ref'
                to="/Ref">Liste des referents</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item
            as={Link}
            name='rechercheReferent'
            to="/rechercheReferent" />
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
export default MenuAllForm;
