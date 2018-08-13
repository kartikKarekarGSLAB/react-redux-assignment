function userReducer( previousState = { users : [] }, action ) {
	switch (action.type) {
		case 'GET_ALL_USER':
			console.log('inside GET_ALL_USER action reducer');
			return {...previousState , users : action.payload };
		default:
			return {...previousState};
	}
	return previousState;
} 
export default userReducer;