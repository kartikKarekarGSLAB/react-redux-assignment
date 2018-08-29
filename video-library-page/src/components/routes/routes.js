import React from 'react';

import { Route , Switch } from 'react-router-dom';

import Endpoints from './../../container/endpoints/endpoints';
import VideoLibrary from './../../container/videoLibrary/videoLibrary';
import PageNotFound from './../../components/pagenotfound/pagenotfound';

const Routes = () => {
	return (
		<div className= "routes-container">
			<Switch>
				<Route path="/" exact component = { Endpoints } />
				<Route path="/videolibrary" exact component = { VideoLibrary } />
				<Route component={ PageNotFound } />
			</Switch>
		</div>
		)
}

export default Routes;