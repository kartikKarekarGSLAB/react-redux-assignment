import React  from 'react';
import './footer.css';
// for localization of lang.
import {FormattedMessage} from 'react-intl'; // to print Message from locale.

function Footer(props) {
	return(
		<div id="video-lib-footer" className="text-right">
			<img src='https://cdn1.iconfinder.com/data/icons/squarenav/480/plus_square_black-48.png' alt='footer-logo' />
			<p>
				<FormattedMessage 
					id="footer.footer_title" 
					defaultMessage=""
				/>
			</p> 
		</div>
		);
}

export default Footer;