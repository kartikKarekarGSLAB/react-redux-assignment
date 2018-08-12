import React , { Component } from 'react';

const styles = {
    width : '30px',
    height : '40px',
}

class VideoHeader extends Component {
    render() {
        return (
            <div>
            <img src={'https://cdn4.iconfinder.com/data/icons/medical-14/512/9-512.png'} style={ styles } alt="header-logo-image" />
                <h1> this is try for react concept understanding!! </h1>
            </div>
            );
    }
}

export default VideoHeader;