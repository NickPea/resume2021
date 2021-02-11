/**
 * Router
 */

import React from "react";

//router
import { BrowserRouter, Route, Switch } from "react-router-dom";

//pages
import Home from "../pages/home";

// app router
export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
