/**
 * -- Webpack Entry --
 *
 * APP & RENDER
 */

import React, { useEffect, Fragment } from "react";
import ReactDom from "react-dom";

//State
import { Provider, useDispatch } from "react-redux";
import store from "./state/store";

//Router
import Routes from "./routes";

//CSS (Global)
import "./app.css";

//App
const App = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "APP->SAGA:APP/START" });
  }, []);
  return <Fragment>{children}</Fragment>;
}; //

//Render
ReactDom.render(
  <Provider store={store}>
    <App>
      <Routes />
    </App>
  </Provider>,
  document.querySelector("#root")
);
