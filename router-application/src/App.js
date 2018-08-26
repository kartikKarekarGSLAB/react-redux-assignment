import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route , Switch } from 'react-router-dom';


import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

var PageNotFound = () => {
  return (<h1>404 Page Not Found</h1>);
}
var User = () => {
  return (<h1>WELCOME USER</h1>);
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <BrowserRouter basename="kartik.karrekar.com">
          <div>
            <Navigation />
            <Switch>
              <Route path="/" exact component={User} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/home" component={Home} />
              <Route component={PageNotFound}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
