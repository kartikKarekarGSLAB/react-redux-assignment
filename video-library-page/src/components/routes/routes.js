import React from 'react';

import { Route , Switch } from 'react-router-dom';

import Endpoints from './../../container/endpoints/endpoints';
import VideoLibrary from './../../container/videoLibrary/videoLibrary';

const Routes = () => {
	return (
		<div className= "routes-container">
			<Route path="/" exact component = { Endpoints } />
			<Route path="/videoLibrary" exact component = { VideoLibrary } />
		</div>
		)
}

export default Routes;