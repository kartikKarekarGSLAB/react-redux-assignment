import React, { Component } from 'react';
import Header from './../components/header/header';
import Footer from './../components/footer/footer';
import VideoLibrary from './videoLibrary/videoLibrary';
import { Provider } from 'react-redux';
import store from './../store';

class Application extends Component {
  
  componentDidMount() {
  	console.log('this is my demo for server-client');
  	fetch('http://localhost:3001/payloadList').then((response) => response.json()).then((videos) => {
  		console.log(videos);
  	});
  }	
  render() {
    return (
	  <Provider store = { store }>	    
	      <div>
	          <Header />
	            <VideoLibrary />
	          <Footer />
	      </div>
	  </Provider>
    );
  }
}

export default Application;
