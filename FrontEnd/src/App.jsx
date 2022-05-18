import React , {useEffect, useState} from "react";
import {Helmet} from "react-helmet";
import { Switch, Route } from "react-router-dom";
// import Aos from 'aos'

// import Navbar from './layouts/Navbar'

// import ProductList from './pages/ProductList'
// import Details from './pages/Details'
// import Default from './pages/Default'
// import Cart from './pages/Cart'
// import Modal from './pages/Modal'
// import Success from './pages/Success'
// import Cancel from './pages/Cancel'
// import CheckoutPaypal from './pages/CheckoutPaypal'
// import CheckoutGooglePay from './pages/CheckoutGooglePay'
// import CheckoutApplePay from './pages/CheckoutApplePay'
// import Contact from './pages/Contact'
// import Login from './pages/Login'
// import Signup from './pages/Signup'
// import Checkout from './pages/CreateCheckoutSession'

// import Navbar from "./components/Navbar";
// import ProductList from "./components/ProductList";
// import Details from "./components/Details";
// import Default from "./components/Default";
// import Cart from "./components/Cart";
// import Modal from "./components/Modal";

// import 'aos/dist/aos.css';
// import './assets/css/general.css';
// import './assets/css/style.css';
// import './assets/css/bootstrap.min.css';
// import './assets/css/responsive.css';

// import 'bootstrap/dist/js/bootstrap.bundle.min';

import Success from "./Success"
import Pay from "./Pay"


const App = () => {


  // useEffect(() => {

  //   Aos.init({
  //     duration: 1000
  //     })
  // },[])

  useEffect(() => {

  },[])

  return (
    
      <Switch>
        <Route path="/success" component={Success} />
        <Route path="/pay" component={Pay} />
        {/* <Route path="/details" component={Details} /> */}
        {/* <Route path="/cart" component={Cart} /> */}
        {/* <Route path="/create-checkout-session" component={Checkout} /> */}
        {/* <Route path="/success" component={Success} /> */}
        {/* <Route path="/cancel" component={Cancel} /> */}
        {/* <Route path="/checkout-paypal" component={CheckoutPaypal} /> */}
        {/* <Route path="/checkout-googlePay" component={CheckoutGooglePay} /> */}
        {/* <Route path="/contact" component={Contact} /> */}
        {/* <Route path="/login" component={Login} /> */}
        {/* <Route path="/signup" component={Signup} /> */}
        {/* add this page when OS id Only Mac or Mobile is iphone!! */}
        {/* {appVersion && <Route path="/checkout-applePay" component={CheckoutApplePay} />} */}
        {/*<Route path="/checkout-applePay" component={CheckoutApplePay} />*/}
        {/* <Route component={Default} /> */}
      </Switch>
  );
}

export default App;