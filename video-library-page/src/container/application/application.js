import React, { Component } from 'react';

// import components
import Header from './../../components/header/header';
import Footer from './../../components/footer/footer';
import Routes from './../../components/routes/routes';

// import Provider and store
import { Provider } from 'react-redux';
import store from './../../store/store';

// import IntlProvider for language localization.
import {IntlProvider} from 'react-intl';

// import config for developement.
import config from './../../config/developement/config';

import enlocale from './../../locales/en/en'; //load locale messages
import eslocale from './../../locales/es/es'; //load locale messages

import {BrowserRouter as Router , Route } from 'react-router-dom';

class Application extends Component {
  locale = {}
  constructor(props) {
    super(props);
    switch( config.lang ) {
      case 'en' : 
        this.locale = enlocale;
        break;
      case 'es' :
        this.locale = eslocale;
        break;
      default :
        this.locale = enlocale;
        break;
    }
  }
  componentDidMount() {
  }
  
  render() {
    return (
	  <Provider store = { store }>
      <IntlProvider locale={ config.lang } messages={ this.locale }>
        <div>
        <Header />
            <Router basename="/videopage">
              <Routes />
            </Router>
        <Footer />
        </div>  	    
      </IntlProvider>
	  </Provider>
    );
  }
}


export default Application;
