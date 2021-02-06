//
//

import { CssBaseline } from "@material-ui/core";
import React, { Fragment } from "react";
import ReactDom from "react-dom";
import PageRouter from "./page-router";

const App = () => {
  return (
    <Fragment>
      <CssBaseline>
        <PageRouter />
      </CssBaseline>
    </Fragment>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
