import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import todos from './Reducer/reducer';
import { createStore } from 'redux'

const store = createStore(todos);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
