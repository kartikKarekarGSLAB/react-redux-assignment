import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Applications from './components/application/application';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Applications />, document.getElementById('root'));
registerServiceWorker();
