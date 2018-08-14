import { combineReducers } from 'redux';

import postsReducer from './postsReducer';
import userReducer from './userReducer';
import postsCRUDReducer from './postsCRUDReducer';

export default combineReducers({
	posts : postsReducer,
	users : userReducer,
	crudposts : postsCRUDReducer
}); 