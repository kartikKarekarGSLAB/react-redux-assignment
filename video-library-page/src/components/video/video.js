import React  from 'react';
import './video.css';

function Video(props) {
	return(
		<div id="video-lib-video">
			<iframe width="150" height="120" 
				src="https://www.youtube.com/embed/YmGm-qwbJdc?list=PL55RiY5tL51rrC3sh8qLiYHqUV3twEYU_" 
				frameBorder="0" 
				allow="autoplay; encrypted-media" 
				allowFullScreen>
			</iframe>
			<div className='video-details'>
				<p className='video-title'>Blood Sugar Testing</p>
				<p className='video-duration'>Duration 7 min</p>
			</div>
			<span>
				  <img src='https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/eye-24-32.png'
					   alt='watch-logo' />
		    </span>			   
		</div>
		);
}
export default Video;