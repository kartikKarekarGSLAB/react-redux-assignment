import React , { Component } from "react";
import TODOTask from './todotask';

class TODOList extends Component {
	

	constructor(props) {
		super(props);

		this.state = {
			items : []
		};

		this.addTask = this.addTask.bind(this);
	}
	addTask(e) {
		e.preventDefault();
		console.log(this._inputElement.value);
		if (this._inputElement.value !== "") {
			var newTask = {
				text : this._inputElement.value,
				key : Date.now()
			}
			console.log('inside addTask : ----> ',this.state.items);
			this.setState ((previousSate) => {
				return {
					items : previousSate.items.concat(newTask)
				};
			});
			this._inputElement.value = "";
			
		}
	}
	render() {
		console.log('todolist class ',this);
		return (
			<div id="task-container">
				<form onSubmit={this.addTask}>
				  <input ref = {(data) => {console.log( 'inside ref : ',this.props);this._inputElement = data;}}
				   placeholder = "Enter Task"
				   type="text" 
				   id="task-information" />
				  <input type="submit" id="add-task" value="ADD TASK" />
				</form>
				<TODOTask entries = { this.state.items } />
			</div>);
	}
}

export default TODOList; 