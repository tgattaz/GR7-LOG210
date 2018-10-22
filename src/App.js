import React from 'react';
import { Route } from 'react-router-dom'
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import EmployePage from "./components/pages/EmployePage";
import AddEmployePage from "./components/pages/AddEmployePage";
import OrgaRefPage from "./components/pages/OrgaRefPage";
import AddOrgaRefPage from "./components/pages/AddOrgaRefPage";
import AddRefPage from "./components/pages/AddRefPage";
import RefPage from "./components/pages/RefPage";
import OrganismePage from "./components/pages/OrganismePage";
import AddOrganismePage from "./components/pages/AddOrganismePage";


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
  </div>
);

export default App;
