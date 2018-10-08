/*import React, { Component } from 'react';
//import { AppRegistry, Text, StyleSheet } from 'react-native';
import logo from './logo.svg';
import './App.css';
//import onClick from'./mouseEvent';



import Pusher from 'pusher-js';

Pusher.logToConsole = true;

var pusher = new Pusher('3813cd18ee179b1959fb', {
  cluster: 'us2',
  forceTLS: true
});



var channel = pusher.subscribe('my-channel');
channel.bind('envoyer-infos', function(data) {
  alert(data.message);
});




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: null,
    };
    this.stateUser = {uname: '', password: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

     handleSubmit(event) {
      alert('A username and password  was submitted: ' + this.stateUser.uname + this.stateUser.password);
      event.preventDefault();
  
      fetch('https://localhost:3001/login', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              uname: this.stateUser.uname,
              password: this.stateUser.password,
          })
      });
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    
  }
  render() {
    return (
      <div>
            <header titleName={"Login"}>
            <div className="App">
        
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Debute la creation un nouvel employe
          </p>
          <div>
          
             <button className="creation" onClick={() => this.setState({click: 'X'})}>
             {this.state.isToggleOn ? 'X' : 'allo'}>
             
                {this.state.click}
              
             </button>
          </div>
         
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
            
          </a>
          </div>
                <div className="container">
                    <div className="card"/>
                    <div className="card">
                        <h1 className="title">Login</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-container">
                            <input name="uname" type="text" value={this.stateUser.uname} id="#uname" required="required"
                                        onChange={this.handleChange}/>
                                <label form="#unamelabel">Username</label>
                                <div className="bar"/>
                            </div>
                            <div className="input-container">
                            <input name="password" type="password" value={this.stateUser.password} id="#pass" required="required"
                                       onChange={this.handleChange}/>
                                <label form="#passlabel">Password</label>
                                 <div className="bar"/>
                            </div>
                            <div className="button-container">
                                <button type="submit" value="Submit"><span>Go</span></button>
                            </div>
                            {<div className="footer"><a href="#">Forgot your password?</a></div> }
                            
                        </form>
                    </div>
                </div>
            </header>
            <footer/>
        </div>
    );
  }
}


export default App;

*/

import React, { Component } from 'react';
//import { AppRegistry, Text, StyleSheet } from 'react-native';
//import logo from './logo.svg';
import './App.css';
import Pusher from 'pusher-js';
import axios from 'axios';

Pusher.logToConsole = true;

var pusher = new Pusher('3813cd18ee179b1959fb', {
  cluster: 'us2',
  forceTLS: true
});



var channel = pusher.subscribe('my-channel');
channel.bind('my-event', function(data) {
  alert(data.message);
});
export default class Login extends React.Component {

  constructor(props) {
      super(props);
      this.state = {uname: '', password: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    event.preventDefault();
  var url = 'http://localhost:8080/data';
  axios.post(url, {
    uname: this.state.uname,
    password: this.state.password
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  this.uname.value = '';
  this.pass.value = '';
  }
  
  handleSubmit(event) {
      alert('A username and password  was submitted: ' + this.state.uname + this.state.password);
      event.preventDefault();
  
      fetch('https://localhost:8080/login', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              uname: this.state.uname,
              password: this.state.password,
          })
      });
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
  }
