import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Switch, Route, Redirect } from "react-router-dom";
import Aos from "aos";

import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

import "aos/dist/aos.css";
import "./assets/style.css";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const user = useSelector((state) => state.user.currentUser);
  // const user = true;

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Login />}
        </Route>

        <Route path="/success">{user ? <Success /> : <Login />}</Route>

        <Route path="/products">{user ? <ProductList /> : <Login />}</Route>
        <Route path="/products/:category">
          {user ? <ProductList /> : <Login />}
        </Route>

        <Route path="/product/:id">{user ? <Product /> : <Login />}</Route>

        <Route path="/cart">{user ? <Cart /> : <Login />}</Route>

        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>

        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </>
  );
};

export default App;
