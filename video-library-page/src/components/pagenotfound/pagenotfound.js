import React  from 'react';
import './pagenotfound.css';
// for localization of lang.
import {FormattedMessage} from 'react-intl'; // to print Message from locale.

function PageNotFound(props) {
	return(
		<div id="page-not-found-container" className="text-center">
			<h1 id="page-not-found-message">
				<FormattedMessage 
					id="pagenotfound.message" 
					defaultMessage=""
				/>			
			</h1> 
		</div>
		);
}

export default PageNotFound;