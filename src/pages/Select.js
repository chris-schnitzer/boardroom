import './Select.css';

export default function Select() {
	return(
		<div className="bg-select">	

			<main className="select-wrap">
				<p className="form-title">Please enter your details to get your shred on</p>
			
				<form>
					
					<label className="label-height">Height</label>
					
					<div className="height">
						<select className="flex-item">
							<option value="">Feet</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
						</select>
						<select className="flex-item">
							<option value="">Inches</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10</option>
							<option value="11">11</option>
						</select>
					</div>



					<label className="label-weight">Weight</label>
					
					<input type="text" name="weight"  autoComplete="off" placeholder="Weight in kilograms" />
						



					<label className="label-exp">Experience</label>
					
					<select className="full-length">
						<option value="">Beginner</option>
						<option value="">Intermediate</option>
						<option value="">Pro</option>
					</select>
					<button>Continue</button>
				</form>
			
			</main>
			
		</div>
	)
}