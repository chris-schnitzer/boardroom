import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import softTopImg from '../images/soft-top.svg';
import midLengthImg from '../images/mid-length.svg';
import shortboardImg from '../images/shortboard.svg';

let img = softTopImg;
export default function CustomBoard() {
	
	const { state } = useLocation();

	useEffect(() => {
 		window.scrollTo(0, 0);
 	}, []);

	// init values
	let feet = parseInt(state.heightFeet);
	let inches = parseInt(state.heightInches);
	const weight = parseInt(state.weight);
	const exp = state.exp;

	//avg volume
	let reqVolume = Math.floor(weight);
    

    //CONVERT TO CENTIMETERS
    //users inputed height inches to cm 
	let heightToCm = feet * 30.48 + inches * 2.54;
	console.log(heightToCm);

	//CONVERT BACK TO FEET AND INCHES
	function convertBackToFeetInches() {
		//cm to inches in decimal form
		let feetAndInch = heightToCm /30.48;
		console.log(feetAndInch);

		//remove decimals by rounding down
		feet = Math.floor(feetAndInch);
		console.log(feet);

		//get leftover decimal and convert to inches
		inches = Math.floor((feetAndInch - feet) * 12);
		console.log(inches);
		
	}

	let summary = " ";
	let typeOfBoard = " ";
	let note = " ";

	if(exp === "Beginner") {
       reqVolume = reqVolume / 1.6;
       
		//beginner surfboard -  +30% longer.
	  	heightToCm = heightToCm / 100 * 30 + heightToCm; 
	  	convertBackToFeetInches();
	  	summary = `The style that'll suit you is a Soft-top, as in the name, it is soft and made of foam as well as having 
	  	the buoyancy needed to get you standing. They are easier to paddle which
	  	 means you catch more waves.`;     
		typeOfBoard = "Soft-Top";
		img = softTopImg;

		
	}

	if(exp === "Intermediate") {
       	reqVolume = reqVolume / 2.4;
       	//intermediate surfboard 15% longer
       	heightToCm = heightToCm / 100 * 15 + heightToCm;
       	convertBackToFeetInches();
       	summary = `The style that'll suit you is a Mid-length
       	, sized between a standard shortboard and a longer beginners board. It allows 
       	enough maneuverabilty to be going rail to rail, honing your technique and working on style,
       	while having the buoyancy for paddle power.`;
       	typeOfBoard = "Mid-length";
       	img = midLengthImg;
       		
	}

	if(exp === "Pro") {
       	reqVolume = reqVolume / 2.75;
       	summary = `The style that'll suit you is a Shortboard, being and upgrade from a Mid-length, the Shortboard has all the maneuverabilty
       	 in the world. As an experienced surfer you should already have the paddling strength which is
       	  not required as much for beginner boards. With the right technique this type should allow 
       	  you to keep progressing. Tubes, turns and maybe even back flips.`;
       	typeOfBoard = "Shortboard";
       	note = `* Please note the above surfboard is based on average waves. If you're looking
       	to ride bigger or smaller waves you might want to adjust the size and volume as well as fin 
       	setups.`;
       	img = shortboardImg;
       	 
	}

 	let url = `//www.google.com/search?q=surfboard%20+%20+${typeOfBoard + ` ` + feet +`"`+inches}&tbm=shop`;



	return (
		<>  
			<main className="custom-wrap">
				<div className="board-img-text">
					<img src={img} alt="Your style of surfboard"/>
					<div className="board-text">
						<h2>{exp}</h2>
						<h4>Ideal surfboard: <b>{feet} foot</b> X <b>{inches} inches</b></h4>
						<h4>Volume: <b>{Math.round(reqVolume)} Litres</b>.</h4>
						<h4>Surfboard style: <b>{typeOfBoard}</b></h4>
						<p>{summary}</p>
					</div>
					<a href={url} target="_blank" rel="noreferrer" className="shop-now">Shop Now</a>
				</div>
				<div><p className="note"><i>{note}</i></p></div>
				
				
				
			</main>
		</>
		
	)
}