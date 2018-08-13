export function fetchPosts() {
	
	return {
		type : 'FETCH_POST' ,
		payload : [
			'this is my first posts',
			'this is my second posts',
			'this is my third posts',
			'this is my fourth posts'
		]
	}
}