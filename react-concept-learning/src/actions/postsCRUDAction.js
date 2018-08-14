import axios from 'axios';

export var getAllPost = () => dispatch => {
	axios.get('https://jsonplaceholder.typicode.com/posts').
	then((response) => 
		dispatch({ type:'GET_ALL_POSTS' , payload:response.data })
	);
}

export var addNewPost = (postPayload) => dispatch => {
	axios.post('https://jsonplaceholder.typicode.com/users',{ postPayload },{
      "Content-type": "application/json; charset=UTF-8"
    }).
	then((response) => {
		console.log('POST RESPONSE : ',response);
		console.log('POSTS RESPONSE DATE : ',response)
		dispatch({ type:'ADD_POSTS' , payload:response.data })
	}).catch((error) => {
		console.error('ERROR OCCUR : ',error);
	});	
} 

export var updatepost = (updatePostData) => dispatch => {
	// fetch('https://jsonplaceholder.typicode.com/posts/1',{method : 'PUT', body:updatePostData,header:{
	// 	'Content-type' : 'application/json'
	// }} ).then((response)=> {
	// 	console.log('response upodate : ',response.json());
	// }).then((updatedPost) => {
	// 	console.log(updatedPost);
	// });
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify(updatePostData) ,
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))

}
