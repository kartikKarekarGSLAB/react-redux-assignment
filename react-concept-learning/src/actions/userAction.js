export var getAllUsers = () => dispatch => {
	fetch('https://jsonplaceholder.typicode.com/users').
	then((response) => response.json()).
	then(users => dispatch({ type:'GET_ALL_USER' , payload:users }));
}

// export function getAllUsers(dispatch) {
// 	console.log(typeof dispatch);
// 	fetch('https://jsonplaceholder.typicode.com/users').
// 	then(function(response){ response.json() }).
// 	then(function(usersArray){
// 		dispatch({type:'GET_ALL_USER',payload:usersArray});
// 	});
// }
// export default getAllUsers;