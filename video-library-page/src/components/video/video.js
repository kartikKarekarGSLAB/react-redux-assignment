import React  from 'react';
import './video.css';
import videoWatchedIcon from './../../images/video_watch_icon.png';
import {FormattedMessage} from 'react-intl'; // to print Message from locale.

function Video(props) {

	return(
		<div className='container-fluid playlist-item'>
			<div className='row'>
				<div className='col-lg-4 col-sm-4  col-md-4 col-xs-4 video-thumbnail'>
					<img className = 'img-thumbnail'
						 width = '100px'
						 height = '100px'
						 src={props.videoDetails.thumbnailUri}
						 alt="thumb-nail"
					/>
				</div>
				<div className='col-lg-8 col-sm-8 col-xs-8 col-md-8 video-details'>
					<p className='video-title'>{props.videoDetails.title}</p>
					<p className='video-duration'>
						{props.videoDetails.duration}&nbsp;&nbsp;
						<FormattedMessage 
							id="video_library.video_timer_label" 
							defaultMessage = ""
						/>
						</p>
					<span>
					{
						props.videoDetails.watched ? <img src={videoWatchedIcon}
							       alt='watch-logo' /> : null
					}
				    </span>					
				</div>					
			</div>
		</div>
		);
}
export default Video;