import React , { Component } from 'react';
import './videoLibrary.css' 
import VideoList from './../../components/videoList/videoList';


class VideoLibrary extends Component {
	render() {
		return (
			<div id='video-library'>
				<div id='video-player'>
					<p id='vedio-player-note'>
						Your provider will be with you momentarily.
					</p>
					<iframe width="650" height="420" 
						src="https://www.youtube.com/embed/YmGm-qwbJdc?list=PL55RiY5tL51rrC3sh8qLiYHqUV3twEYU_" 
						frameBorder="0" 
						allow="autoplay; encrypted-media" 
						allowFullScreen />
					<p id='vedio-player-title'>
						current vedio title
					</p>					
				</div>
				<div id='video-playlist'>
					<p id='vedio-playlist-note'>
						The Following vedios have been selected especially for you while you wait
					</p>
					<p id='vedio-playlist-title'>
						Up Next
					</p>
					<VideoList />
				</div>				
			</div>
			);
	}
}

export default VideoLibrary;