import { useEffect } from 'react';

import softTopImg from "../images/soft-top.svg";
import midLengthImg from "../images/mid-length.svg";
import shortboardImg from "../images/hpboard.svg";

export default function Surfboards() {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return(
		<div className="surfboards-wrap">

			<div className="surfboards-intro">	
				<h1>Know your surfboards...</h1>
				<p>Surfboards come in many different shapes and sizes. Whether you're just starting out, you're a weekend
				warrior or the hardcore guy there is a surfboard for you.</p>
			</div>

			<div className="ind-surfboard-wrap">
				<h2>Soft-top</h2>
				<img src={softTopImg} alt="Soft top surfboard"/>
				<p>The Soft-top is a perfect beginners board, 
				as in the name it is soft and made of foam as well as having the buoyancy needed to get you standing. 
				They are easier to paddle which means you catch more waves. Although it's the perfect beginner board it's 
				also suited for anyone who just wants fun in horrid conditions.</p>
			</div>

			<div className="ind-surfboard-wrap">
				<h2>Mid-length</h2>
				<img src={midLengthImg} alt="Mid length surfboard"/>
				<p>Sized between a standard shortboard and a longer beginners board. 
				It allows enough maneuverabilty to be going rail to rail, 
				honing your technique and working on style, while having the buoyancy for
				paddle power. Also not limited to intermediates but advanced surfers wanting a fun board.</p>
			</div>

			<div className="ind-surfboard-wrap"> 
				<h2>Shortboard</h2>
				<img src={shortboardImg} alt="Shortboard surfboard"/>
				<p>Being and upgrade 
				from a Mid-length, the Shortboard has all the maneuverabilty in 
				the world. Suited for the experienced surfer who should already have the 
				paddling strength which is not required as much for beginner boards. 
				With the right technique this type should allow you to keep progressing. 
				Tubes, turns and maybe even back flips.</p>
			</div>
		</div>
	)
}