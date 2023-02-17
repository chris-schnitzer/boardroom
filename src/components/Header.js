import React from 'react';

import logo from '../images/boardroom-logo.png';

export default function Header() {
	return(
		<header>
			<img className="logo" src={logo}/>
		</header>
	)
}