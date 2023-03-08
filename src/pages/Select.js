import { useState } from 'react';
import './Select.css';

export default function Select() {
	
	const initialValues = { heightFeet: "", heightInches: "", weight: "", exp: "" };
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmitted, setIsSubmitted] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		setFormErrors(validate(formValues));
		setIsSubmitted(true);
	}

	function handleChange(e) {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
		console.log(formValues.heightInches);
	}

	function validate(values) {
		const errors = {};
		if(!values.heightFeet) {
			errors.heightFeet = "Feet required";
		}
		if(!values.heightInches) {
			errors.heightInches = "Inches required";
		}
		if(!values.weight) {
			errors.weight = "Weight is required";
		} else if(isNaN(values.weight)) {
			errors.weight = "Please enter a number";
		}
		if(!values.exp) {
			errors.exp = "Exp is required";
		}
		return errors;
	}

	return(
		<div className="bg-select">
			{/*if length equals 0 and is submitted */}
			{Object.keys(formErrors).length === 0 && isSubmitted ? 
			(<div className="msg-success">
				<h2>
					Your sled will be with you shortly
				</h2>
			</div>) : <></>}		

			<main className="select-wrap">
				<p className="form-title">Please enter your details to get your shred on</p>
			
				<form onSubmit={handleSubmit}>
					
					<label className="label-height">Height</label>
					
					<div className="height">
						<div className="feet-wrap">
							<select 
								className="flex-item"
								value={formValues.heightFeet}
								onChange={handleChange}
								name="heightFeet"
							>
								<option value="">Feet</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
							</select>
							<p className="error error-height">{formErrors.heightFeet}</p>
						</div>

						<div className="inches-wrap">
							<select 
								className="flex-item"
								value={formValues.heightInches}
								onChange={handleChange}
								name="heightInches"
							>
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
							<p className="error error-height">{formErrors.heightInches}</p>
						</div>
						
					</div>


					<div className="weight">
						<label className="label-weight">Weight</label>
						
						<input
							className="full-width" 
							type="text" 
							name="weight"  
							autoComplete="off" 
							placeholder="Weight in kilograms"
							value={formValues.weight}
							onChange={handleChange} 
						/>
						<p className="error">{formErrors.weight}</p>
					</div>
					<label className="label-exp">Experience</label>
					
					<div className="exp">
						<select 
							className="full-width"
							value={formValues.exp}
							onChange={handleChange}
							name="exp"
						>	
							<option value="">Exp</option>
							<option value="Beginner">Beginner</option>
							<option value="Intermediate">Intermediate</option>
							<option value="Pro">Pro</option>
						</select>
						<p className="error">{formErrors.exp}</p>
					</div>
					<button type="submit">Continue</button>
				</form>
			
			</main>
			
		</div>
	)
}