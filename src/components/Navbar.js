import React, {useState} from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
	const[open, setOpen] = useState(false);
	return(
		<>
			<div className="nav-menu-btn" onClick ={() => setOpen(!open)}>
				{open ? <p>X</p> : <p>Menu</p>}
			</div>

			<nav className={open ? "nav-links-active" : "nav-links"}>
				<div className="nav-wrapper">
					<ul>
						<li><NavLink to="/" className="nav-link" 
						onClick={ () => setOpen(false) }
						>Home</NavLink></li>

						<li><NavLink to="about" className="nav-link" 
						onClick={ () => setOpen(false) }
						>About</NavLink></li>

						<li><NavLink to="select" className="nav-link" 
						onClick={ () => setOpen(false) }
						>Select</NavLink></li>

						<li><NavLink to="surfboards" className="nav-link" 
						onClick={ () => setOpen(false) }
						>Surfboards</NavLink></li>

						<li><NavLink to="contact" className="nav-link" 
						onClick={ () => setOpen(false) }
						>Contact</NavLink></li>
					</ul>
				</div>
			</nav>
		</>
	)
}