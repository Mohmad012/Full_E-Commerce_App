import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';
import App from './App';
// basename="template_react"

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY)


ReactDOM.render(
	<BrowserRouter>
		{/* <Elements stripe={stripePromise}> */}
			<App />
		{/* </Elements> */}
	</BrowserRouter>,
  document.getElementById('root')
);
