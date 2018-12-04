import React from "react";
import { Menu, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../actions/auth";
import PropTypes from "prop-types";
const MenuAllForm = ({ role, logout }) => (
  <Menu pointing secondary>
    <Menu.Item as={Link} name="home" to="/" />
    {role !== 4 && (
      <Dropdown item text="employe">
        <Dropdown.Menu>
          <Dropdown.Item as={Link} name="employe" to="/employes">
            Liste des employes
          </Dropdown.Item>
          <Dropdown.Item as={Link} name="addEmploye" to="/addEmploye">
            Ajouter ou modifier un employe
          </Dropdown.Item>
          <Dropdown.Item as={Link} name="delEmploye" to="/delEmploye">
            Virer un employe
          </Dropdown.Item>
          <Dropdown.Item as={Link} name="updateEmploye" to="/updateEmploye">
            Mettre a jour un employe
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )}
    {role === 1 && (
      <Dropdown item text="organismes">
        <Dropdown.Menu>
          <Dropdown.Item as={Link} name="Organisme" to="/Organisme">
            Liste des organismes
          </Dropdown.Item>
          <Dropdown.Item as={Link} name="addOrganisme" to="/addOrganisme">
            Ajouter ou modifier un organisme
          </Dropdown.Item>
          <Dropdown.Item as={Link} name="addEmployeOrga" to="/addEmployeOrga">
            Ajouter employe dans un organisme
          </Dropdown.Item>
          <Dropdown.Item as={Link} name="delOrganisme" to="/delOrganisme">
            Retirer un organisme
          </Dropdown.Item>
          <Dropdown.Item as={Link} name="updateOrganisme" to="/updateOrganisme">
            Mettre a jour un organisme
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )}
    <Dropdown item text="organismes référents">
      <Dropdown.Menu>
        <Dropdown.Item as={Link} name="OrgaRef" to="/OrgaRef">
          Liste des organismes référents
        </Dropdown.Item>
        <Dropdown.Item as={Link} name="addOrgaRef" to="/addOrgaRef">
          Ajouter un organisme référent
        </Dropdown.Item>
        <Dropdown.Item as={Link} name="updateOrgaRef" to="/updateOrgaRef">
          Modifier un organisme référent
        </Dropdown.Item>
        <Dropdown.Item
          as={Link}
          name="desactiverOrgaRef"
          to="/desactiverOrgaRef"
        >
          Desactiver un organisme un organisme référent
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown item text="Gérer les référents">
      <Dropdown.Menu>
        <Dropdown.Item as={Link} name="rechercheReferent" to="/rechercheReferent">
          Chercher réferent
        </Dropdown.Item>
        <Dropdown.Item as={Link} name="OrgaRefSelection" to="/OrgaRefSelection">
          Choisir un organisme référent pour y ajouter un employe
        </Dropdown.Item>
        <Dropdown.Item as={Link} name="updateRef" to="/updateRef">
          Modifier un référent
        </Dropdown.Item>
        <Dropdown.Item as={Link} name="updateRef" to="/delRef">
          Retirer le réferent choisi
        </Dropdown.Item>
        <Dropdown.Item as={Link} name="Ref" to="/Ref">
          Liste des referents
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown item text="Gérer les notes">
      <Dropdown.Menu>
        <Dropdown.Item as={Link} name="rechercheFamille" to="/rechercheFamille">
          Choisir une famille afin d'ajouter une note
        </Dropdown.Item>
        <Dropdown.Item as={Link} name="updateNote" to="/updateNote">
          Modifier une note
        </Dropdown.Item>
        <Dropdown.Item as={Link} name="delNote" to="/delNote">
          Retirer la note
        </Dropdown.Item>
        <Dropdown.Item as={Link} name="Note" to="/Note">
          Liste des notes
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown item text="Gérer les services">
      <Dropdown.Menu>
        <Dropdown.Item as={Link} name="PointServiceSelection" to="/PointServiceSelection">
          Choisir un point de service afin pour y ajouter un service
        </Dropdown.Item>
        <Dropdown.Item as={Link} name="service" to="/service">
          Liste des services disponibles
        </Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown item simple text="Gérer les demandes de service" direction='left'>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} name="AddDemandeService" to="/AddDemandeService">
            Créer une demande de service
          </Dropdown.Item>
          <Dropdown.Item as={Link} name="DemandeServiceSelection" to="/DemandeServiceSelection">
            Choisir une demande de service pour compléter l'information du second parent
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    <Menu.Menu position="right">
      <Menu.Item as={Link} name="logout" to="/" onClick={() => logout()} />
    </Menu.Menu>
  </Menu>
);
MenuAllForm.protoTypes = {
  logout: PropTypes.func.isRequired,
  role: PropTypes.number.isRequired
};
function mapStateToProps(state) {
  return {
    role: state.user.role
  };
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
export default connect(
  mapStateToProps,
  { logout: actions.logout }
)(MenuAllForm);
