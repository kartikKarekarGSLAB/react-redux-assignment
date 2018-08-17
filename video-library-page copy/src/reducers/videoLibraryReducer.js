function videoLibraryReducer( previousState = { videos : [] }, action ) {
	switch (action.type) {
		case 'GET_VIDEO_LIBRARY':
			return {...previousState , videos : action.payload };
		case 'VIDEO_SELECTED_FROM_PLAYLIST':
			return {...previousState , currentVideo : action.payload }
		default:
			return {...previousState};
	}
} 
export default videoLibraryReducer;