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
			return {...previousState , videos : action.payload };
		case 'VIDEO_SELECTED_FROM_PLAYLIST':
			action.payload.watched = true;
			return {...previousState , currentVideo : action.payload };
		case 'FAIL_TO_GET_VIDEO_LIBRARY':
			return {...previousState , videosAvaliable : false};
		default:
			console.log('inside default case - for videoLibraryReducer');			
			return {...previousState};
	}
} 
export default videoLibraryReducer;