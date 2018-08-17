import { createStore , applyMiddleware } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducers';

const middleWare = applyMiddleware( logger , thunk );

export default createStore( reducer , { } ,middleWare );