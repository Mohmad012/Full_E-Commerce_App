import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Switch, Route } from "react-router-dom";
import Aos from "aos";

import Home from "./pages/Home";
import List from "./pages/List";
import Single from "./pages/Single";
import New from "./pages/New";
// import Register from './pages/Register'
import Login from "./pages/Login";
// import Cart from './pages/Cart'

import data from "./data/static.json";
import { DarkModeContext } from "./context/darkMode";

import "aos/dist/aos.css";
import "./assets/dark.scss";
import "./assets/style.scss";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Urbanist:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/users" component={List} />

        <Route
          exact
          path="/users/new"
          render={() => (
            <New InputsData={data[0].userInputs} title="Add New User" />
          )}
        />

        <Route exact path="/users/:userId" component={Single} />

        <Route exact path="/products" component={List} />

        <Route
          exact
          path="/products/new"
          render={() => (
            <New InputsData={data[0].productInputs} title="Add New Product" />
          )}
        />

        <Route exact path="/products/:productId" component={Single} />
      </Switch>
    </div>
  );
};

export default App;
