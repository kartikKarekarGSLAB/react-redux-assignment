import React, { Component } from 'react';
import './application.css';

// import for creating store.
import { Provider } from 'react-redux';

// import other components.
import Header from './../header/header';
import Footer from './../footer/footer';
import PageContent from './../pageContent/pageContent';
import store from './../../Store';
 

class Application extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="application">
          <Header />
          <PageContent />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default Application;
