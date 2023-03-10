
import { useLocation } from 'react-router-dom';



export default function CustomBoard() {
	const { state } = useLocation();


	//if beginner add 8 inches to height of board + width and thickness depending on weight
	let feet = parseInt(state.heightFeet);
	let inches = parseInt(state.heightInches);
	
	const weight = parseInt(state.weight);
	const exp = state.exp;

	let thickness = 0;
	let width = 0;

	

	console.log(typeof(weight), "WEIGHT");
 	
 	if(exp === "Beginner") {
 		feet = feet + 2;
 	} 

 	console.log(exp);
	return (
		<>  
			<main className="custom-wrap">
				<h3>Your ideal surfboard is a:</h3>
				<h5>{feet} foot {inches} inches long, {width} inches wide and {thickness} inches thick.</h5>
				<h1>{exp}</h1>
			</main>
		</>
		
	)
}