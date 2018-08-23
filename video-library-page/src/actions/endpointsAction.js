import axios from 'axios';
import config from './../config/developement/config';


export var requestEndpointsList = () => dispatch => {
    
    dispatch({
        type: 'REQUEST_ENDPOINTS',
        payload: []
    });

    axios.get(config.contenthost + config.api.endpointsList).then((response) => {
        dispatch({
            type: 'GET_ENDPOINTS_LIST',
            payload: response.data.payloadList
        });
    }).catch((error) => {
        if (error.response.status === 404) {
            dispatch({
                type: 'FAIL_TO_GET_ENDPOINTS_LIST',
                payload: error.response.text
            });
        }
    });    
}