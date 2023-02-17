import React from 'react';
import ReactDom from 'react-dom/client';
import 'normalize.css';
import './index.css';


import App from './App.js';

const root = ReactDom.createRoot(document.getElementById("root")); 

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);