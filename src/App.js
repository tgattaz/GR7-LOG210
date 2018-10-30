import React from 'react';
import { Route } from 'react-router-dom'
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import EmployePage from "./components/pages/EmployePage";
import AddEmployePage from "./components/pages/AddEmployePage";
import OrgaRefPage from "./components/pages/OrgaRefPage";
import OrgaRefSelectionPage from "./components/pages/OrgaRefSelectionPage";
import AddOrgaRefPage from "./components/pages/AddOrgaRefPage";
import AddRefPage from "./components/pages/AddRefPage";
import RefPage from "./components/pages/RefPage";
import OrganismePage from "./components/pages/OrganismePage";
import AddOrganismePage from "./components/pages/AddOrganismePage";
import RechercheReferentPage from "./components/pages/RechercheReferentPage";
import DelRefPage from "./components/pages/deletePages/DelRefPage";

const App = () => (
  <div className="ui container">
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
    <Route path="/employes" exact component={EmployePage} />
    <Route path="/addEmploye" exact component={AddEmployePage} />
    <Route path="/OrgaRef" exact component={OrgaRefPage} />
    <Route path="/addOrgaRef" exact component={AddOrgaRefPage} />
    <Route path="/addRef" exact component={AddRefPage} />
    <Route path="/Ref" exact component={RefPage} />
    <Route path="/rechercheReferent" exact component={RechercheReferentPage} />
    <Route path="/Organisme" exact component={OrganismePage} />
    <Route path="/addOrganisme" exact component={AddOrganismePage} />
    < Route path = "/OrgaRefSelection" exact component = {OrgaRefSelectionPage}/>
    < Route path = "/delRef" exact component = {DelRefPage}/>
  </div>
);

export default App;
