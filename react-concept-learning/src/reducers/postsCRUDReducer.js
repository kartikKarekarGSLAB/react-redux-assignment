function postsCRUDReducer( previousState = { posts : [] }, action ) {
	switch (action.type) {
		case 'GET_ALL_POSTS':
			console.log('inside GET_ALL_POSTS action of reducer');
			return {...previousState , posts : action.payload };
		case 'ADD_POSTS':
			console.log('inside ADD_POSTS action of reducer');
			return {...previousState , posts : action.payload };			
		default:
			return {...previousState};
	}
	// return previousState;
} 
export default postsCRUDReducer;