import axios from 'axios';

export var getVideoPlaylist = () => dispatch => {
	axios.get('http://localhost:3001/payloadList').
	then((response) =>  {
		console.log('inside action : ',response.data);
		dispatch({ type:'GET_VIDEO_LIBRARY' , payload:response.data })
	});
}