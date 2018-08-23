function videoLibraryReducer(
    previousState = {
        videosList: {
            videos: [],
            loading: false,
            error: ""
        },
        currentVideo: {
            title: '',
            httpUri: ''
        }
    },
    action) {
    switch (action.type) {
        case 'REQUEST_VIDEO_LIBRARY':
            return {...previousState,
                videosList: {
                    videos: action.payload,
                    loading: true,
                    error: ""
                },
                currentVideo: {
                    title: '',
                    httpUri: ''
                }
            };
        case 'GET_VIDEO_LIBRARY':
            return {...previousState,
                videosList: {
                    videos: action.payload,
                    loading: false,
                    error: ""
                },
                currentVideo: action.payload[0]
            };
        case 'VIDEO_SELECTED_FROM_PLAYLIST':
            // selected video flag changed to true.
            // to render. 
            action.payload.watched = true;
            return {...previousState,
                currentVideo: action.payload
            };
        case 'FAIL_TO_GET_VIDEO_LIBRARY':
            return {...previousState,
                videosList: {
                    videos: [],
                    loading: false,
                    error: action.payload
                },
                currentVideo: {
                    title: '',
                    httpUri: ''
                }
            };
        default:
            return {...previousState
            };
    }
}
export default videoLibraryReducer;