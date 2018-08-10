import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
      	 <img src={'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/heartbeat-64.png'} alt="logo" />
      	 <p> Francisco's Hospital</p>
      </div>
    );
  }
}

export default Header;
