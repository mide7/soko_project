import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import AllProducts from "./AllProducts";
import FaceMasks from "./FaceMasks";
import FreshFood from "./FreshFood";
import Grocery from "./Grocery";
import Kids from "./Kids";
import Home from "./Home";
import ShoppingBag from "./ShoppingBag";
import Account from "./Account";
import ShoppingItem from "./ShoppingItem";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <App>
            <AllProducts />
          </App>
        </Route>
        <Route exact path="/all">
          <App>
            <AllProducts />
          </App>
        </Route>
        <Route exact path="/face-masks">
          <App>
            <FaceMasks />
          </App>
        </Route>
        <Route exact path="/fresh-food">
          <App>
            <FreshFood />
          </App>
        </Route>
        <Route exact path="/grocery">
          <App>
            <Grocery />
          </App>
        </Route>
        <Route exact path="/home">
          <App>
            <Home />
          </App>
        </Route>
        <Route exact path="/kids">
          <App>
            <Kids />
          </App>
        </Route>
        <Route exact path="/cart">
          <App>
            <ShoppingBag />
          </App>
        </Route>
        <Route exact path="/product/:id" component={ShoppingItem} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
