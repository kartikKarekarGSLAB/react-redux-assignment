import React from 'react';
import './index.css';
import ReactDom from 'react-dom';

//add refernce of component.
import TODOList from './component/todolist';
import Clock from './component/Clock';
import Status from './component/Status';
import ImagesGrid from './component/ImagesGrid';
import InputForm from './component/InputForm';

var destination = document.querySelector("#container");
function Application() {
	return (
			<div>	
		 		<Clock incerment="1" />
				<Status />
		 		<ImagesGrid />
		 		<TODOList />
		    </div>);

	// form input.
	// return (<div>
	// 	<InputForm />
	// </div>);
}
ReactDom.render(
	<Application />
,destination);
