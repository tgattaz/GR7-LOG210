import React, { Component } from 'react';
//import { AppRegistry, Text, StyleSheet } from 'react-native';

import './App.css';
import { auth } from "./services/login"
import Testget from './services/testget'
import Employe from './services/employe'
import AddEmploye from './services/addEmploye'
import AddOrganisme from './services/addOrganisme'
import Organisme from './services/organisme'
import AddOrganisme from './services/addOrganisme'
import Organisme from './services/organisme'
import addOrgaRef from './services/addOrgaRef'
import OrgaRef from './services/OrgaRef'
export default class App extends Component{
    render(){
        return(
            <div className="App">
                <header >
                    <h1>Test ajouter et afficher</h1>
                </header>
                <br/>
                <AddOrgaRef/>
                <br/>
                <OrgaRef/>
                <br/>
                <AddOrganisme/>
                <br/>
                <Organisme/>
                <br/>
                <AddEmploye/>
                <br/>
                <Employe/>

            </div>
        );
    }
    
}
/*
export default class Login extends React.Component {

  constructor(props) {
      super(props);
      this.state = {uname: '', password: ''};
  
  }
  //higher order components (HOC)  factoriser code :erreur , page loading 
  //faire les test avec jest render %
  //alller par featcher 
  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

  }
  
  handleSubmit = (event) => {
    //   alert('A username and password  was submitted: ' + this.state.uname + this.state.password);
      event.preventDefault();
      auth(this.state);
  }
  
  render() {
  
      return (
          <div>
              <header titleName={"Login"}>
                  <div className="container">
                      <div className="card"/>
                      <div className="card">
                          <h1 className="title">Login</h1>
                          <form onSubmit={this.handleSubmit}>
                              <div className="input-container">
                                  <input name="uname" type="text" value={this.state.uname} id="#uname" required="required"
                                          onChange={this.handleChange}/>
                                  <label form="#unamelabel">Username</label>
                                  <div className="bar"/>
                              </div>
                              <div className="input-container">
                                  <input name="password" type="password" value={this.state.password} id="#pass" required="required"
                                         onChange={this.handleChange}/>
                                  <label form="#passlabel">Password</label>
                                  <div className="bar"/>
                              </div>
                              <div className="button-container">
                                  <button type="submit" value="Submit"><span>Go</span></button>
                              </div>
                              <div className="footer"><a href="#">Forgot your password?</a></div>
                          </form>
                      </div>
                  </div>
              </header>
              <footer/>
          </div>
      );
  }
  }*/
