import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/basicPages/HomePage";
import LoginPage from "./components/pages/basicPages/LoginPage";
import EmployePage from "./components/pages/basicPages/EmployePage";
import AddEmployePage from "./components/pages/addPages/AddEmployePage";
import OrgaRefPage from "./components/pages/basicPages/OrgaRefPage";
import OrgaRefSelectionPage from "./components/pages/selectionPages/OrgaRefSelectionPage";
import AddOrgaRefPage from "./components/pages/addPages/AddOrgaRefPage";
import AddRefPage from "./components/pages/addPages/AddRefPage";
import RefPage from "./components/pages/basicPages/RefPage";
import OrganismePage from "./components/pages/basicPages/OrganismePage";
import AddOrganismePage from "./components/pages/addPages/AddOrganismePage";
import AddEmployeOrgaPage from "./components/pages/addPages/addEmployeOrgaPage";
import RechercheReferentPage from "./components/pages/selectionPages/RechercheReferentPage";
import DelRefPage from "./components/pages/deletePages/DelRefPage";
import UpdateRefPage from "./components/pages/updatePages/UpdateRefPage";
import DelOrganismePage from "./components/pages/deletePages/DelOrganismePage";
import UpdateOrganismePage from "./components/pages/updatePages/UpdateOrganismePage";
import UpdateOrganismeRefPage from "./components/pages/updatePages/UpdateOrganismeRefPage";
import DesactiverOraganismeRefPage from "./components/pages/deletePages/DesactiverOraganismeRefPage";
import DelEmployePage from "./components/pages/deletePages/DelEmployePage";
import UpdateEmployePage from "./components/pages/updatePages/UpdateEmployePage";
import RechercherFamillePage from "./components/pages/selectionPages/RechercherFamillePage";
import AddNotePage from "./components/pages/addPages/AddNotePage";
import DelNotePage from "./components/pages/deletePages/DelNotePage";
import UpdateNotePage from "./components/pages/updatePages/UpdateNotePage";
import NotePage from "./components/pages/basicPages/NotePage";
import PointServiceSelectionPage from "./components/pages/selectionPages/PointServiceSelectionPage";
import AddServicePage from "./components/pages/addPages/AddServicePage";
import ServicePage from "./components/pages/basicPages/ServicePage";
import AddDemandeServicePage from "./components/pages/addPages/AddDemandeServicePage";
import DemandeServiceSelectionPage from "./components/pages/selectionPages/DemandeServiceSelectionPage";
import PointDeServicePage from "./components/pages/basicPages/PointDeServicePage";
import AddPointDeServicePage from "./components/pages/addPages/AddPointDeServicePage";

const App = () => (
  <div className="ui container">
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
    <Route path="/employes" exact component={EmployePage} />
    <Route path="/addEmploye" exact component={AddEmployePage} />
    <Route path="/delEmploye" exact component={DelEmployePage} />
    <Route path="/updateEmploye" exact component={UpdateEmployePage} />
    <Route path="/OrgaRef" exact component={OrgaRefPage} />
    <Route path="/addOrgaRef" exact component={AddOrgaRefPage} />
    <Route path="/addRef" exact component={AddRefPage} />
    <Route path="/Ref" exact component={RefPage} />
    <Route path="/rechercheReferent" exact component={RechercheReferentPage} />
    <Route path="/Organisme" exact component={OrganismePage} />
    <Route path="/addOrganisme" exact component={AddOrganismePage} />
    <Route path="/addEmployeOrga" exact component={AddEmployeOrgaPage} />
    <Route path="/OrgaRefSelection" exact component={OrgaRefSelectionPage} />
    <Route path="/delRef" exact component={DelRefPage} />
    <Route path="/updateRef" exact component={UpdateRefPage} />
    <Route path="/delOrganisme" exact component={DelOrganismePage} />
    <Route path="/updateOrganisme" exact component={UpdateOrganismePage} />
    <Route path="/addOrgaRef" exact component={AddOrgaRefPage} />
    <Route path="/updateOrgaRef" exact component={UpdateOrganismeRefPage} />
    <Route path="/desactiverOrgaRef" exact component={DesactiverOraganismeRefPage}/>
    <Route path="/rechercheFamille" exact component={RechercherFamillePage} />
    <Route path="/addNote" exact component={AddNotePage} />
    <Route path="/delNote" exact component={DelNotePage} />
    <Route path="/updateNote" exact component={UpdateNotePage} />
    <Route path="/Note" exact component={NotePage} />
    <Route path="/addService" exact component={AddServicePage} />
    <Route path="/Service" exact component={ServicePage} />
    <Route path="/AddDemandeServicePage" exact component={AddDemandeServicePage} />
    <Route path="/PointServiceSelection" exact component={PointServiceSelectionPage} />
    <Route path="/DemandeServiceSelectionPage" exact component={DemandeServiceSelectionPage} />
    <Route path="/PointDeServicePage" exact component={PointDeServicePage} />
    <Route path="/AddPointDeServicePage" exact component={AddPointDeServicePage} /> 
   

  </div>
);
export default App;
