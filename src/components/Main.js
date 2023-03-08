import { NavLink } from 'react-router-dom';

import mainImg from '../images/boards-fill.png';

export default function Main() {
	return(
		<main>
			<img className="featureImg" src={mainImg} alt="Various Surfboards"/>
			<p>Your <b>ultimate</b> guide to picking a <b>surfboard</b>.</p>
			<NavLink to="select" style={{ textDecoration: 'none' }}>
				<button>Start</button>
			</NavLink>
		</main>
	)
}