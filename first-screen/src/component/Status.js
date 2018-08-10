import React , { Component } from 'react'

export default class Status extends Component {
	
	constructor(prpos) {
		super(prpos);
		this.state = {
			statusFlag : true
		};
		// this.handleToggleEvent = this.handleToggleEvent.bind(this);
	}

	handleToggleEvent = () => {
		// console.log(generator);
		console.log('inside handleToggleEvent : ',this.props);
		this.setState( function(previousSate,props) {
			console.log('previousSate : ',previousSate);
			return {
				statusFlag : !previousSate.statusFlag
			};
		 } );

	}


	render() {
		return (
			<div>
			<button onClick={ this.handleToggleEvent }>
			{ this.state.statusFlag ? "ON" : "OFF" }
			</button>
			 {
				 this.state.statusFlag &&
				 <img 
				 src= { 
				 	'https://cdn3.iconfinder.com/data/icons/glypho-free/64/pulse-box-32.png' 
				 } 
				 alt= "status" />
			 }
			 </div>	
			);
	}
}