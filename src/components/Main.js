import React from 'react';

import mainImg from '../images/boards-fill.png';

export default function Main() {
	return(
		<main>
			<img className="featureImg" src={mainImg}/>
			<p>Your <b>ultimate</b> guide to picking a <b>surfboard</b>.</p>
			<button>Start</button>
		</main>
	)
}