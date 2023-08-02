import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/boardroom-logo.svg';

export default function Header() {
	return(
		<header>
			<NavLink to="/">
				<img className="logo" src={logo} alt="The Board Room logo"/>
			</NavLink>
		</header>
	)
}