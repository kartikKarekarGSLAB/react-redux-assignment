import {
    combineReducers
} from 'redux';
import videoLibraryReducer from './videoLibraryReducer';
import localeReducer from './localeReducer';
import endpointsReducer from './endpointsReducer';
export default combineReducers({
    videoLibrary: videoLibraryReducer,
    locale: localeReducer,
    endpoints: endpointsReducer
});