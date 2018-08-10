import { combineReducers } from 'redux';
import vedioReducer from './vedioReducer';

export default combineReducers({
	vediosFetch : vedioReducer
});