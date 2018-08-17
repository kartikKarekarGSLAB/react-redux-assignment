import React , { Component } from 'react';
import { connect } from 'react-redux';

import './videoLibrary.css' 

import Video from './../../components/video/video';
import { getVideoPlaylist,videoSelectedFromPlayList } from './../../actions/videoLibraryAction';


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
							console.log('inside map loop : ',this.props);
							return (<div
							        key = {currentVideo.contentVideoPk} 
								    onClick={(event) => this.props.videoSelectedFromPlayList(event,currentVideo) }>
									<Video 
								      videoDetails={currentVideo}
								      /> 
								    </div>  
									);
							});
		var currentVideoTitle = '';		
		// console.log('============================================> ',(this.props.currentVideo !== undefined));
		if(this.props.currentVideo !== undefined ) {
			currentVideoTitle = this.props.currentVideo.title;
		}
		else	{
			console.log(this.props.videos);
			// currentVideoTitle = this.props.videos[0].title;		
		}
		return (

			<div id='video-library'>
				<div id='video-player'>
					<p id='video-player-note'>
						Your provider will be with you momentarily.
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
  videoSelectedFromPlayList : (event,currentState) => { dispatch( videoSelectedFromPlayList(event,currentState) ) }	
});

export default connect(mapStateToProps , mapDispatchToProps )(VideoLibrary);