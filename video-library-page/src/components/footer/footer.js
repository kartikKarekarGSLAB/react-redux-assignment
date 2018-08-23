import React  from 'react';
import './footer.css';
// for localization of lang.
import {FormattedMessage} from 'react-intl'; // to print Message from locale.
import videoFooterIcon from './../../images/video_library_footer_icon.png';

function Footer(props) {
	return(
		<div id="video-lib-footer" className="text-right">
			<img id="video-lib-footer-icon" src={ videoFooterIcon } alt='footer-logo' />
			<p id="video-lib-footer-text">
				<FormattedMessage 
					id="footer.footer_title" 
					defaultMessage=""
				/>
			</p> 
		</div>
		);
}

export default Footer;