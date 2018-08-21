import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './container/application';
import registerServiceWorker from './registerServiceWorker';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
// import { addLocaleData } from 'react-intl';
// import en from 'react-intl/locale-data/en';

// addLocaleData(en); 
ReactDOM.render(<Application />, document.getElementById('root'));
registerServiceWorker();
