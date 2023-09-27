import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

import begImg from '../images/about-beginner.svg';
import intImg from '../images/about-intermediate.svg';
import proImg from '../images/about-pro.svg';

export default function About() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return(
		<div className="about-wrap">

			<h1>What should you know?</h1>
			<p className="about-intro">With all the information on the internet today as well
				as the massive selection of equipment available it can be
				overwhelming to make the right choice. Many factors come into the
				equation when selecting the correct surfboard such as experience, physique
				and the type of surfing you want to progress in. Stay tuned for the fitness
				and coaching edition.
			</p>

			<div className="three-col-wrap">
				<div className="about-beginner">
					<h2>Beginner</h2>
					<img className="beg-img" src={begImg} alt="Beginner surfer"/>
					<p>Whether you've never surfed before, you're playing around
						in the white water, standing up or just started to ride real waves
						(the green ones). Any of the above makes you a beginner. 
						Click below to find your perfect surfboard.
					</p>
					<NavLink to="../select" className="nav-link">Select</NavLink>
				</div>

				<div className="about-intermediate">
					<h2>Intermediate</h2>
					<img className="int-img" src={intImg} alt="Intermediate surfer"/>
					<p>So you're riding green waves nicely and starting to turn the
					board. You're relatively comfortable going right or left. You're 
					ready to start maneuvering and taking your surfing to the next level.
					You're ready for intermediate equipment, click below to find yours.
					</p>
					<NavLink to="../select" className="nav-link">Select</NavLink>
				</div>
			
				<div className="about-pro">
					<h2>Pro</h2>
					<img className="pro-img" src={proImg} alt="Pro surfer doing a trick"/>
					<p>You've found your flow, can generate speed and lay into sections. 
					You ride barrels and pop big airs. Pro sleds are for you. 
					Click below to find the magic carpet.
					 </p>
					<NavLink to="../select" className="nav-link">Select</NavLink>
				</div>
			</div>
		</div>
	)
}