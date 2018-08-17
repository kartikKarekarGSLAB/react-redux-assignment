import React , { Component } from 'react';
import { connect } from 'react-redux';

import './videoLibrary.css' 

import Video from './../../components/video/video';
import { getVideoPlaylist,videoSelectedFromPlayList } from './../../actions/videoLibraryAction';


class VideoLibrary extends Component {
	componentDidMount() {
		this.props.getVideoPlaylist();
		this.props.videoSelectedFromPlayList({},{});
	}
	render() {
		var currentVideoTitle , currentVideoURL;
		const videoArray = this.props.videos.map( (currentVideo , index ) => {
							console.log('current index : ',index);
							if(index == 0 ) {
								currentVideoURL  = currentVideo.httpUri;
								currentVideoTitle = currentVideo.title;		
							}
							return (<div
							        key = {currentVideo.contentVideoPk} 
								    onClick={(event) => this.props.videoSelectedFromPlayList(event,currentVideo) }>
									<Video 
								      videoDetails={currentVideo}
								      /> 
								    </div>  
									);
							});

		if(typeof this.props.currentVideo.title != 'undefined') {
			currentVideoURL = this.props.currentVideo.httpUri;
			currentVideoTitle = this.props.currentVideo.title;
		}
		return (

			<div id='video-library'>
				<div id='video-player'>
					<p id='video-player-note'>
						Your provider will be with you momentarily.
					</p>
					<video id="player" controls="true" width="650" height="420" autoPlay= "true" src={currentVideoURL}>
					</video>
					<p id='video-player-title'>
					{
						currentVideoTitle
					}
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
	videos : state.videoLibrary.videos ,
	currentVideo : state.videoLibrary.currentVideo
});
const mapDispatchToProps = (dispatch,props) => ({
  getVideoPlaylist : () => { dispatch( getVideoPlaylist() ) },
  videoSelectedFromPlayList : (event,currentVideo) => { dispatch( videoSelectedFromPlayList(event,currentVideo) ) }	
});

export default connect(mapStateToProps , mapDispatchToProps )(VideoLibrary);