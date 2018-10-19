import React from 'react';
import { Route } from 'react-router-dom'
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import EmployePage from "./components/pages/EmployePage";

const App = () =>
<div className="ui container">
    <Route path="/" exact component={HomePage}/>
    <Route path="/login" exact component={LoginPage}/>
    <Route path="/employes" exact component={EmployePage}/>
</div>

export default App;