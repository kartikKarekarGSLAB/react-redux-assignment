import axios from 'axios';
import config from './../config/developement/config';


export var getVideoPlaylist = () => dispatch => {
	var apiURL = config.contenthost + config.api.videoList;
	axios.get( apiURL ).then((response) =>  {
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