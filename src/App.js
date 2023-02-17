import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.js';
import SharedLayout from './SharedLayout';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Surfboards from './pages/Surfboards.js';
import Select from './pages/Select.js';
import Contact from './pages/Contact.js';
import Error from './pages/Error.js';

import Header from './components/Header.js';



export default function App() {
	return(
		<>
		<Header />
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<SharedLayout />} >
					<Route index element={ <Home />}/>
					<Route path='About' element={<About />} />
		            <Route path='Select' element={<Select />} />
		            <Route path='Surfboards' element={<Surfboards />} />
		            <Route path='Contact' element={<Contact />} />
		            <Route path='*' element={ <Error />} />
				</Route>
			</Routes>
			
		</BrowserRouter>

		</>
	)
}

// just a comment test git change

//git second change