import 'core-js/es6/map'; // for IE < 11 
import 'core-js/es6/set'; //

import 'raf/polyfill'; //

import 'intl/dist/Intl' // for IE10 and IE9  ECMAScript Internationalization API.

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
