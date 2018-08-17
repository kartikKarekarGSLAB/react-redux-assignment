import { combineReducers } from 'redux';
import videoLibraryReducer from './videoLibraryReducer';

export default combineReducers({
	videoLibrary : videoLibraryReducer
});