import { useEffect } from 'react';

import contactBg from "../images/contact-bg.svg";

export default function Contact() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return(
		<div className="contact-wrap">
			<div className="contact-text">
				<h1>Get in touch.</h1>
				<p>Find me in the tube at:<br/>cdschnitzer@gmail.com</p>
			</div>
			<div className="contact-bg-img">
				<img src={contactBg} alt="decorative wave"/>
			</div>
		</div>
	)
}