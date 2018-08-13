import React, { Component } from 'react';
import Header from './../components/header/header';
import Footer from './../components/footer/footer';
import VideoLibrary from './videoLibrary/videoLibrary';

class Application extends Component {
  render() {
    return (
      <div>
          <Header />
            <VideoLibrary />
          <Footer />
      </div>
    );
  }
}

export default Application;
