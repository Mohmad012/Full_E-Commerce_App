import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
// basename="template_react"
ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
  document.getElementById('root')
);
