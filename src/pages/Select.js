import './Select.css';

export default function Select() {
	return(
		<div className="bg-select">	

			<main className="select-wrap">
			<form>
				<label>Please enter your details to get your shred on</label>
				<select>
					<option value="">Height</option>
				</select>
				<select>
					<option value="">Weight</option>
				</select>
				<select>
					<option value="">Experience</option>
				</select>
				<button>Continue</button>
			</form>
			
			</main>
			
		</div>
	)
}