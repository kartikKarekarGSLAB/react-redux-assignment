import React  from 'react';
import './header.css';
// for localization of lang.
import {FormattedMessage} from 'react-intl'; // to print Message from locale.

function Header(props) {
	return(
		<div id="video-lib-header">
			<img src='https://cdn2.iconfinder.com/data/icons/font-awesome/1792/heartbeat-48.png' alt='header-logo' />
			<p>
				<FormattedMessage 
					id="header.header_title" 
					defaultMessage=""
				/>			
			</p> 
		</div>
		);
}

export default Header;