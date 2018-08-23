import React  from 'react';
import './header.css';
// for localization of lang.
import {FormattedMessage} from 'react-intl'; // to print Message from locale.
import videoHeaderIcon from './../../images/video_library_header_icon.png';

function Header(props) {
	return(
		<div id="video-lib-header">
			<img id="video-lib-header-icon" src={ videoHeaderIcon } alt='header-logo' />
			<p id="video-lib-header-text">
				<FormattedMessage 
					id="header.header_title" 
					defaultMessage=""
				/>			
			</p> 
		</div>
		);
}

export default Header;