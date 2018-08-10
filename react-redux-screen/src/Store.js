import { createStore , applyMiddleware ,compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; //rootReducer with combine reducer.
import { composeWithDevTools } from 'remote-redux-devtools';
import { fetchVedio } from './actions/vedioActions';
import { alertWarningMessage } from './actions/alertAction';

const intialState = {};

const middleWare = [ thunk ];

// const store = createStore(rootReducer, intialState , applyMiddleware(...middleWare));

// const store = createStore(rootReducer, intialState ,  composeWithDevTools(
//   applyMiddleware(...middleWare)));

// enhancer for store for redux devtools.
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    	fetchVedio,alertWarningMessage
    }) : compose;

// enhancer for store.
const enhancer = composeEnhancers( applyMiddleware(...middleWare) );

const store = createStore(rootReducer, intialState , enhancer);

export default store;
