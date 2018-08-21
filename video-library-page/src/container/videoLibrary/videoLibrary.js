import React , { Component } from 'react';
import { connect } from 'react-redux';

import './videoLibrary.css' 

import Video from './../../components/video/video';
import { getVideoPlaylist,videoSelectedFromPlayList } from './../../actions/videoLibraryAction';
import { localeChanged } from './../../actions/localeAction';

// for localization of lang.
import {IntlProvider} from 'react-intl';
import {FormattedMessage} from 'react-intl'; // to print Message from locale.
// import { addLocaleData } from 'react-intl';

// addLocaleData(en);

class VideoLibrary extends Component {
	componentDidMount() {
		this.props.getVideoPlaylist();
		this.props.videoSelectedFromPlayList({},{});
	}
	displayMessage = (event) => {
		alert('inside select event : ',event.target.value);
	}
	render() {

		var currentVideoTitle , currentVideoURL;
		const videoArray = this.props.videos.map( (currentVideo , index ) => {
							if(index === 0 ) {
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

		if(typeof this.props.currentVideo.title !== 'undefined') {
			currentVideoURL = this.props.currentVideo.httpUri;
			currentVideoTitle = this.props.currentVideo.title;
		}
		return (
			<IntlProvider locale={this.props.lang} messages={this.props.locale}>
				<div className = 'container-fluid'>
					<div className="row">
						<div className="col-lg-12 col-sm-12 col-md-12 col-xs-12 text-right">
							<select onChange={(event) => this.props.localeChanged(event.target.value)}>
							  <option value="en">English (United State) EN</option>
							  <option value="es">Spanish ES</option>
							</select>						
						</div>
					</div>
					<div className = 'row'>
						<div className = 'col-lg-8 col-sm-8 col-md-8 col-xs-8 text-center'>
							<h3 id = "wait-message">
								<FormattedMessage id={this.props.locale.video_library.wait_message} />
							</h3>
							<div className='row'>
								<div className='col-xs-12 col-md-12 col-lg-12 col-sm-12'>
									<video id="player" controls="true" width="70%" height="60%" autoPlay= "true" src={currentVideoURL}>
									</video>
									<p id='video-player-title'>{ currentVideoTitle }</p>
								</div>
							</div>
													
						</div>
						<div className = 'col-lg-4 col-sm-4 col-md-4 col-xs-4' id='video-playlist'>
							<p id='video-playlist-note'>
								<FormattedMessage id={this.props.locale.video_library.video_playlist_note} />
							</p>
							<p id='video-playlist-title'>
								<FormattedMessage id={this.props.locale.video_library.video_playlist_title} />
							</p>
							{ this.props.videosAvaliable ? 
							  <ul id="video-lib-video-list"> {videoArray} </ul> :
							  <p>
							  	<FormattedMessage id={this.props.locale.video_library.video_playlist_error} />
							  </p>
							}
						</div>
					</div>
				</div>
			</IntlProvider>
			);
	}
}

const mapStateToProps = (state) => ({
	videos : state.videoLibrary.videos ,
	currentVideo : state.videoLibrary.currentVideo,
	videosAvaliable : state.videoLibrary.videosAvaliable,
	lang : state.locale.lang,
	locale : state.locale.locale
});
const mapDispatchToProps = (dispatch,props) => ({
  getVideoPlaylist : () => { dispatch( getVideoPlaylist() ) },
  videoSelectedFromPlayList : (event,currentVideo) => { dispatch( videoSelectedFromPlayList(event,currentVideo) ) },
  localeChanged : (locale) => { dispatch( localeChanged(locale) ) }	
});

export default connect(mapStateToProps , mapDispatchToProps )(VideoLibrary);