export var getAllUsers = () => dispatch => {
	fetch('https://jsonplaceholder.typicode.com/users').
	then((response) => response.json()).
	then(users => dispatch({ type:'GET_ALL_USER' , payload:users }));
}
// export default getAllUsers;