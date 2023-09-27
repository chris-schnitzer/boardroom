import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SharedLayout from './SharedLayout';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Surfboards from './pages/Surfboards.js';
import Select from './pages/Select.js';
import Contact from './pages/Contact.js';
import Error from './pages/Error.js';
import CustomBoard from './pages/CustomBoard.js'

import Header from './components/Header.js';



export default function App() {
	return(
		<>
		
		<BrowserRouter>
			<Header/>
			<Routes>
				<Route path='/' element={<SharedLayout />} >	
					<Route index element={ <Home />}/>
					<Route path='About' element={<About />} />
		            <Route path='Select' element={<Select />}/>
		            <Route path="custom-board" element={<CustomBoard />}/>
		            <Route path='Surfboards' element={<Surfboards />}/>     
		            <Route path='Contact' element={<Contact />} />
		            <Route path='*' element={ <Error />} />
				</Route>

			</Routes>
			
		</BrowserRouter>
		</>
	)
}


