import { useEffect } from 'react';

export default function Error() {
	
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);	

	return(
		<>	
			<div className="error-wrap">
				<div className="error-msg">
					<h1>404</h1>
					<h2>Sorry - No content here</h2>
					<h3>Should've gone left</h3>
				</div>
			</div>
		</>
	)
}