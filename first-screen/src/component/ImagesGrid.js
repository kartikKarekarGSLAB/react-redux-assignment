import React , { Component } from 'react';
import hatti from './../baby.jpg';
import './ImagesGrid.css';


function CreateImage() {
	return (
		<li className="list-item" key={Math.floor(Math.random() * (100-1)) + 1}>
			<img className="list-image" alt="hatti" src={ hatti } />
		</li>
		);
}

export default class ImagesGrid extends Component {
	
	render() {
		return (<ul>
			      <CreateImage />
			      <CreateImage />
			      <CreateImage />
			      <CreateImage />
		        </ul>);
	}
}