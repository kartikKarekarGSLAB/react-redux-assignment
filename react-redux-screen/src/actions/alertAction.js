import { FETCH_VEDIO , PLAY_VEDIO } from './types'; 

export const alertWarningMessage = () => dispatch => {
	alert('Hello I\'m listening to you');
	dispatch({ type : PLAY_VEDIO , status : 'ON' });
}
