import { combineReducers } from 'redux';
import videoLibraryReducer from './videoLibraryReducer';
import localeReducer from './localeReducer';
export default combineReducers({
	videoLibrary : videoLibraryReducer,
	locale : localeReducer
});