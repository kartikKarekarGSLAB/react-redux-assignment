import React , { Component } from 'react';
import { connect } from 'react-redux';

import './videoLibrary.css' 

import Video from './../../components/video/video';
import { getVideoPlaylist,videoSelectedFromPlayList } from './../../actions/videoLibraryAction';

// for localization of lang.
import {FormattedMessage} from 'react-intl'; // to print Message from locale.

class VideoLibrary extends Component {
	componentDidMount() {
		this.props.getVideoPlaylist();
		this.props.videoSelectedFromPlayList({},{});
	}
	render() {
		const videoArray = this.props.videos.map( (currentVideo , index ) => {
							var selected = "video-playlist-item ";
							if(currentVideo.contentVideoPk === this.props.currentVideo.contentVideoPk) {
								selected += "selectedVideo";
							}
							return (<div className = { selected } 
							        key = {currentVideo.contentVideoPk} 
								    onClick={(event) => this.props.videoSelectedFromPlayList(event,currentVideo) }>
									<Video 
								      videoDetails={currentVideo}
								      /> 
								    </div>  
									);
							});


		return (
				<div className = 'container-fluid'>
					<div className = 'row'>
						<div className = 'col-lg-8 col-sm-8 col-md-8 col-xs-8 text-center'>
							<div className='row'>
								<div className='col-xs-12 col-md-12 col-lg-12 col-sm-12 video-player-container'>
									<h3 id = "wait-message">
										<FormattedMessage 
											id="video_library.wait_message" 
											defaultMessage = ""
										/>
									</h3>
									<video id="player" controls="true" width="70%" height="60%" 
									       autoPlay= "true" src={ this.props.currentVideo.httpUri }>
									</video>
									<p id='video-player-title'>{ this.props.currentVideo.title }</p>
								</div>
							</div>
													
						</div>
						<div className = 'col-lg-4 col-sm-4 col-md-4 col-xs-4' id='video-playlist'>
							<p id='video-playlist-note'>
								<FormattedMessage 
									id="video_library.video_playlist_note" 
									defaultMessage=""
								/>
							</p>
							<p id='video-playlist-title'>
								<FormattedMessage 
									id="video_library.video_playlist_title" 
									defaultMessage=""
								/>
							</p>
							{ this.props.videosAvaliable ? 
							  <ul id="video-lib-video-list"> {videoArray} </ul> :
							  <p>
								<FormattedMessage 
									id="video_library.video_playlist_error" 
									defaultMessage=""
								/>							  
							  </p>
							}
						</div>
					</div>
				</div>
			);
	}
}

const mapStateToProps = (state) => ({
	videos : state.videoLibrary.videos ,
	currentVideo : state.videoLibrary.currentVideo,
	videosAvaliable : state.videoLibrary.videosAvaliable
});
const mapDispatchToProps = (dispatch,props) => ({
  getVideoPlaylist : () => { dispatch( getVideoPlaylist() ) },
  videoSelectedFromPlayList : (event,currentVideo) => { dispatch( videoSelectedFromPlayList(event,currentVideo) ) }
});

export default connect(mapStateToProps , mapDispatchToProps )(VideoLibrary);