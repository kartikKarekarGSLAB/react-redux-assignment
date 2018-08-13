function postsReducer( 
	previousState = { posts :[] , error : null} , 
	action ) {
	switch (action.type) {
		case 'FETCH_POST':
			return {...previousState , posts : action.payload };
		default:
		return {...previousState };
	}
}

export default postsReducer;