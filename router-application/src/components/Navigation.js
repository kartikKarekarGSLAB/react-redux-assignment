import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
	return (
		<div>
			<NavLink to="/home" >
				<button>Home</button>
			</NavLink>
			<NavLink to="/about" >
				<button>About</button>
			</NavLink>
			<NavLink to="/contact" >
				<button>Contact</button>
			</NavLink>
		</div>
		)
}

export default Navigation;