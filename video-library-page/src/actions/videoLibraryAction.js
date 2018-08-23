import axios from 'axios';
import config from './../config/developement/config';


export var requestVideoPlaylist = () => dispatch => {
    
    dispatch({
        type: 'REQUEST_VIDEO_LIBRARY',
        payload: []
    });

    axios.get(config.contenthost + config.api.videoList).then((response) => {
        dispatch({
            type: 'GET_VIDEO_LIBRARY',
            payload: response.data.payloadList
        });
    }).catch((error) => {
        if (error.response.status === 404) {
            dispatch({
                type: 'FAIL_TO_GET_VIDEO_LIBRARY',
                payload: error.response.text
            });
        }
    });    
}

export var videoSelectedFromPlayList = (event, currentVideo) => dispatch => {
    dispatch({
        type: 'VIDEO_SELECTED_FROM_PLAYLIST',
        payload: currentVideo
    });
}