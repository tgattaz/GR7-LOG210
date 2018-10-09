import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          
        </header>
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
      </div>
    );
  }
}

export default App;
