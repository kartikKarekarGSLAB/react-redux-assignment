import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './container/application/application';
import registerServiceWorker from './registerServiceWorker';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import { addLocaleData } from 'react-intl';
addLocaleData(en);
addLocaleData(es);
 
ReactDOM.render(<Application/>, document.getElementById('root'));
registerServiceWorker();
