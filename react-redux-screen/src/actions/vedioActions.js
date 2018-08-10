import { FETCH_VEDIO , PLAY_VEDIO } from './types';

export const fetchVedio = () => dispatch => {
	  	console.log('inside fetch function');
	  	fetch('https://jsonplaceholder.typicode.com/photos')
	  	.then(res => res.json())
	  	.then(vedios => dispatch( { type : FETCH_VEDIO, payload : vedios }) );		
}