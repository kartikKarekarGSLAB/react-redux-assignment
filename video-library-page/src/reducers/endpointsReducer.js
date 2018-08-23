function endpointsReducer(
    previousState = {
        endpointsList: {
            endpoints: [],
            loading: false,
            error: ""
        }
    },
    action) {
    switch (action.type) {
        case 'REQUEST_ENDPOINTS':
            return {...previousState,
                endpointsList: {
                    endpoints: action.payload,
                    loading: true,
                    error: ""
                }
            };
        case 'GET_ENDPOINTS_LIST':
            return {...previousState,
                endpointsList: {
                    endpoints: action.payload,
                    loading: false,
                    error: ""
                }};
        case 'FAIL_TO_GET_ENDPOINTS_LIST':
            return {...previousState,
                endpointsList: {
                    endpoints: [],
                    loading: false,
                    error: action.payload
                }};
        default:
            return {...previousState
            };
    }
}
export default endpointsReducer;