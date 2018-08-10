import React , { Component } from "react";

export default class TODOTask extends Component {

	createItem(item,index) {
		return (<li key = { index }> {item.text} </li>);
	}
	render() {
		console.log('properties : ',this.props);
		console.log('entries : ',typeof this.props.entries);

		var taskEntries = this.props.entries;
		var TaskList = taskEntries.map((currentElement,index,currentList) => {
											console.log('currentElement : ',currentElement);
											console.log('currentIndex : ',index);
											console.log('currentList : ',currentList);
											return this.createItem(currentElement,index);
										});
		console.log(TaskList);
		return (
			<ul id="task">
				{
					TaskList
				}
			</ul>
			);
	}
}