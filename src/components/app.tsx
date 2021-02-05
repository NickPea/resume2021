//
//

import React from "react";
import ReactDom from "react-dom";

//CSS
//

import "../index.css";

// import CssBaseline from "@material-ui/core/CssBaseline";
import LandingPageTemplate from "./pages/landing/template";

const App = () => {
  return <LandingPageTemplate />;
};

ReactDom.render(<App />, document.querySelector("#root"));
