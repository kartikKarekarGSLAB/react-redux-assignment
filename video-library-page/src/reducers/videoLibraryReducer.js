function videoLibraryReducer( 
			previousState = { 
								videos : [] , 
								currentVideo : { title : '' , httpUri : '' } 
							}, 
			action ) 
{
	switch (action.type) {
		case 'GET_VIDEO_LIBRARY':
			action.payload.map((currentVideo) => {
				currentVideo.watched = false ;
			});
			return {...previousState , videos : action.payload };
		case 'VIDEO_SELECTED_FROM_PLAYLIST':
			previousState.videos.map((currentVideo) => {
				if(action.payload.contentVideoPk === currentVideo.contentVideoPk ) {
					currentVideo.watched = true;
				}
			});
			return {...previousState , currentVideo : action.payload }
		default:
			return {...previousState};
	}
} 
export default videoLibraryReducer;