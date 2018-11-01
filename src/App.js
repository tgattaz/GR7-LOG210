import React from 'react';
import { Route } from 'react-router-dom'
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
import RechercheReferentPage from "./components/pages/selectionPages/RechercheReferentPage";
import DelRefPage from "./components/pages/deletePages/DelRefPage";
import UpdateRefPage from "./components/pages/updatePages/UpdateRefPage";
import DelOrganismePage from "./components/pages/deletePages/DelOrganismePage";
import UpdateOrganismePage from "./components/pages/updatePages/UpdateOrganismePage";

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
    < Route path = "/updateRef" exact component = {UpdateRefPage}/>
    < Route path = "/delOrganisme" exact component = {DelOrganismePage}/>
    < Route path = "/updateOrganisme"
    exact component = {
      UpdateOrganismePage
    }
    />
  </div>
);

export default App;
