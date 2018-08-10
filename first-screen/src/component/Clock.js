import React ,{ Component } from 'react'

export default class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter : 0 ,
			date : new Date()
		};
	}

	componentDidMount() {
		this.timmerInervalId = setInterval(()=> this.ticks(), 10000);
	}

	componentWillunmount() {
		clearInterval(this.timmerInervalId);		
	}


	ticks() {
		// Wrong way.
		// this.setState({
		// 	counter : this.state.counter + new Number(this.props.incerment),//this.props.incerment,
		// 	date : new Date()
		// });

		// Correct Way.
		this.setState(function(previousSate,props) {
			// console.log('inside function');
			// console.log('current sate :',this.state);
			// console.log('previousSate : ',previousSate);
			// console.log('end of function');
			return {
				counter : previousSate.counter + Number(props.incerment),
				date : new Date()
			}
		})
	}

	render() {
		return (
			<div id="clock">{ this.state.counter }  ||  { this.state.date.toLocaleTimeString() } </div>
			);
	}
}