import React , { Component } from 'react';
import './videoLibrary.css' 
import VideoList from './../../components/videoList/videoList';


class VideoLibrary extends Component {
	render() {
		return (
			<div id='video-library'>
				<div id='video-player'>
					<p id='video-player-note'>
						Your provider will be with you momentarily.
					</p>
					<iframe width="650" height="420" 
						src="https://www.youtube.com/embed/YmGm-qwbJdc?list=PL55RiY5tL51rrC3sh8qLiYHqUV3twEYU_" 
						frameBorder="0" 
						allow="autoplay; encrypted-media" 
						allowFullScreen />
					<p id='video-player-title'>
						current video title
					</p>					
				</div>
				<div id='video-playlist'>
					<p id='video-playlist-note'>
						The Following videos have been selected especially for you while you wait
					</p>
					<p id='video-playlist-title'>
						Up Next
					</p>
					<VideoList />
				</div>				
			</div>
			);
	}
}

export default VideoLibrary;