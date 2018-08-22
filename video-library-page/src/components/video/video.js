import React  from 'react';
import './video.css';

function Video(props) {

	return(
		<div className='container playlist-item'>
			<div className='row'>
				<div className='col-lg-4 video-thumbnail'>
					<img className = 'img-thumbnail'
						 width = '150px'
						 height = '150px'
						 src={props.videoDetails.thumbnailUri}
						 alt="thumb-nail"
					/>
				</div>
				<div className='col-lg-8 video-details'>
					<p className='video-title'>{props.videoDetails.title}</p>
					<p className='video-duration'>{props.videoDetails.duration} min</p>
					<span>
					{
						props.videoDetails.watched ? <img src='https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/eye-24-16.png'
							       alt='watch-logo' /> : null
					}
				    </span>					
				</div>					
			</div>
		</div>
		);
}
export default Video;