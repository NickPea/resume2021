/**
 * Redux Store
 */

import { createStore, applyMiddleware } from "redux";
import createSageMiddleware from "redux-saga";
import rootReducer from "./reducers/root-reducer";
import rootSaga from "./sagas/root-saga";
import { composeWithDevTools } from "redux-devtools-extension";

// middleware
const reduxSaga = createSageMiddleware();

// store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxSaga))
);

reduxSaga.run(rootSaga);

export default store;
