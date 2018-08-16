import React  from 'react';
import './video.css';

function Video(props) {
	return(
		<div id="video-lib-video" onClick={props.onClickHandler}>
			<img width="150" height="120"
				 src={props.videoDetails.thumbnailUri}
				 alt="thubmline"
			/>
			<div className='video-details'>
				<p className='video-title'>{props.videoDetails.title}</p>
				<p className='video-duration'>{props.videoDetails.duration} min</p>
			</div>
			<span>
				  <img src='https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/eye-24-32.png'
					   alt='watch-logo' />
		    </span>			   
		</div>
		);
}
export default Video;