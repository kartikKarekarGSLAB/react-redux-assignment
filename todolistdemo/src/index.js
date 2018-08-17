import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './containers/application';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import store from './store';

var application = (<Provider store={store} >
						<Application />
				  </Provider>);	
ReactDOM.render(application, document.getElementById('root'));
registerServiceWorker();
