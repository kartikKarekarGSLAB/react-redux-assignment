function videoLibraryReducer( previousState = { videos : [] }, action ) {
	switch (action.type) {
		case 'GET_VIDEO_LIBRARY':
			return {...previousState , videos : action.payload };
		default:
			return {...previousState};
	}
} 
export default videoLibraryReducer;