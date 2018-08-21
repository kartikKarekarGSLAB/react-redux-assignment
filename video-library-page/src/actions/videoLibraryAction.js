import axios from 'axios';

export var getVideoPlaylist = () => dispatch => {
	axios.get('http://localhost:3001/payloadList').then((response) =>  {
		console.log('inside action creator SUCCESS for data : ',response);
		dispatch({ type:'GET_VIDEO_LIBRARY' , payload:response.data })
	}).catch((error) => {
		if (error.response.status === 404) {
			dispatch({ type:'FAIL_TO_GET_VIDEO_LIBRARY' , payload:'No videos found for playlist.' })
		}		
	});
}

export var videoSelectedFromPlayList = (event,currentVideo) => dispatch => {
	dispatch({type:'VIDEO_SELECTED_FROM_PLAYLIST' ,payload:currentVideo});
}