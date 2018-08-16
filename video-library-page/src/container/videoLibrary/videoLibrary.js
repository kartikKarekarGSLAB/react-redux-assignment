import React , { Component } from 'react';
import { connect } from 'react-redux';

import './videoLibrary.css' 

import Video from './../../components/video/video';

import { getVideoPlaylist } from './../../actions/videoLibraryAction';


class VideoLibrary extends Component {
	componentDidMount() {
		this.props.getVideoPlaylist();
	}

	playListVideoSelected = (event,currentVideo) => {
		document.getElementById("player").setAttribute("src",currentVideo.httpUri);
		document.getElementById("video-player-title").innerHTML = currentVideo.title;
	}
	render() {
		const videoArray = this.props.videos.map( (currentVideo) => {
							return (<Video 
									  key = {currentVideo.contentVideoPk}
								      onClick={(event) => this.playListVideoSelected(event,currentVideo)} 
								      videoDetails={currentVideo} />
									);
							});		
		return (

			<div id='video-library'>
				<div id='video-player'>
					<p id='video-player-note'>
						Your provider will be with you momentarily.
					</p>
					<video id="player" controls="true" width="650" height="420" autoPlay= "true" src="https://pccontent01.stagrp.com/v/RELAXATION/2015HD_BreathOfLight.mp4">
					</video>
					<p id='video-player-title'>
					</p>					
				</div>
				<div id='video-playlist'>
					<p id='video-playlist-note'>
						The Following videos have been selected especially for you while you wait
					</p>
					<p id='video-playlist-title'>
						Up Next
					</p>
					<ul id="video-lib-video-list">
						{ videoArray }
					</ul>
				</div>				
			</div>
			);
	}
}

const mapStateToProps = (state) => ({
	videos : state.videoLibrary.videos
});
const mapDispatchToProps = (dispatch,props) => ({
  getVideoPlaylist : () => { dispatch( getVideoPlaylist() ) }	
});

export default connect(mapStateToProps , mapDispatchToProps )(VideoLibrary);