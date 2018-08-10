import { FETCH_VEDIO , PLAY_VEDIO } from './../actions/types';

const initialState = {
	vedios : [] ,
	status : ''
}

export default function(previousState = initialState , action) {
	switch (action.type) {
		case 'FETCH_VEDIO':
			console.log('FETCH_VEDIO reducer....');
			return {
				...previousState,
				vedios : action.payload
			}	
		case 'PLAY_VEDIO':
			return {
				...previousState,
				status : action.status
			}
		default:
			return previousState;			
	}
}
