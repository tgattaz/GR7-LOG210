import React from 'react';
import { Route } from 'react-router-dom'
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import EmployePage from "./components/pages/EmployePage";
import AddEmployePage from "./components/pages/AddEmployePage";
import OrgaRefPage from "./components/pages/OrgaRefPage";
import AddOrgaRefPage from "./components/pages/AddOrgaRefPage";

const App = () =>
<div className="ui container">
    <Route path="/" exact component={HomePage}/>
    <Route path="/login" exact component={LoginPage}/>
    <Route path="/employes" exact component={EmployePage}/>
    <Route path="/addEmploye" exact component={AddEmployePage}/>
    <Route path="/OrgaRef" exact component={OrgaRefPage}/>
    <Route path="/addOrgaRef" exact component={AddOrgaRefPage}/>
</div>

export default App;
