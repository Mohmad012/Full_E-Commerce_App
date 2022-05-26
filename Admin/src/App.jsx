import React , {useEffect} from "react";
import { Helmet } from "react-helmet";
import { Switch, Route } from "react-router-dom";
import Aos from 'aos'

import Home from './pages/Home'
// import ProductList from './pages/ProductList'
// import Product from './pages/Product'
// import Register from './pages/Register'
// import Login from './pages/Login'
// import Cart from './pages/Cart'

import 'aos/dist/aos.css';
import "./assets/style.css"


const App = () => {

  useEffect(() => {

    Aos.init({
      duration: 1000
      })
  },[])  

  return (
          <>
            <Helmet>
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
              <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Urbanist:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
            </Helmet>
            <Switch>
              <Route path="/" exact component={Home} />
              {/* <Route path="/" exact component={ProductList} /> */}
              {/* <Route path="/" exact component={Product} /> */}
              {/* <Route path="/" exact component={Register} /> */}
              {/* <Route path="/" exact component={Login} /> */}
              {/* <Route path="/" exact component={Cart} /> */}
            </Switch>
          </>
        )
};

export default App;