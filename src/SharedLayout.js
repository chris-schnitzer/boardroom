import { Link, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar.js';

export default function SharedLayout () {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	)
}