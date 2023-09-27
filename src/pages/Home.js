import { useEffect } from 'react';

import Main from '../components/Main.js';

export default function Home() {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return(
		<>
			<Main />
		</>
	)
}