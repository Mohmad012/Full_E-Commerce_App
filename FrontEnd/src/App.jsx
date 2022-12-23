import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Switch, Route } from "react-router-dom";
import Aos from "aos";

import Home from "./pages/Home";
// import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Favorite from "./pages/Favorite";

import "aos/dist/aos.css";
import "./assets/style.css";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {
  const isDark = useSelector((state) => state.mode.isDark);

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className={`App ${isDark && "dark"}`}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <title>BUY &amp; SALE.</title>
      </Helmet>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/success">
          <Success />
        </Route>

        {/* <Route path="/products"> */}
        {/*   <ProductList /> */}
        {/* </Route> */}
        {/* <Route path="/productsForCategory/:category"> */}
        {/*   <ProductList /> */}
        {/* </Route> */}

        <Route path="/product/:id">
          <Product />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>

        <Route path="/favorite">
          <Favorite />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
