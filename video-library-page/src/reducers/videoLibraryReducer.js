function videoLibraryReducer( 
			previousState = { 
								videos : [] ,
								videosAvaliable : true , 
								currentVideo : { title : '' , httpUri : '' }
							}, 
			action ) 
{
	switch (action.type) {
		case 'GET_VIDEO_LIBRARY':
			action.payload.map((currentVideo) => currentVideo.watched = false );
			return {...previousState , videos : action.payload , currentVideo : action.payload[0]};
		case 'VIDEO_SELECTED_FROM_PLAYLIST':
			// selected video flag changed to true.
			// to render. 
			action.payload.watched = true;
			return {...previousState , currentVideo : action.payload };
		case 'FAIL_TO_GET_VIDEO_LIBRARY':
			return {...previousState , videosAvaliable : false};
		default:
			return {...previousState};
	}
} 
export default videoLibraryReducer;