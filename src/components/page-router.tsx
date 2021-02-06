/**
 * Router
 */

import React from "react";

//router
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

//pages
import LandingPageTemplate from "./pages/landing/template";
import AboutPageTemplate from "./pages/about/template";
import CredentialsPageTemplate from "./pages/credentials/template";
import ContactPageTemplate from "./pages/contact/template";

//render
const PageRouter = () => {
  return (
    <BrowserRouter>
      {/* SPA Routes */}
      <Switch>
        <Route exact path="/">
          <LandingPageTemplate /> {/* Home */}
        </Route>
        <Route exact path="/about">
          <AboutPageTemplate />
        </Route>
        <Route exact path="/credentials">
          <CredentialsPageTemplate />
        </Route>
        <Route exact path="/contact">
          <ContactPageTemplate />
        </Route>
      </Switch>
      {/* SPA Routes */}
    </BrowserRouter>
  );
};

export default PageRouter;
