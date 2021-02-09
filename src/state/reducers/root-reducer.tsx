/**
 * ROOT REDUCER
 */

import { combineReducers } from "redux";

//reducers
import { appReducer } from "./app-reducer";
import { landingPageReducer } from "./landing-page-reducer";

//root reducer
export default combineReducers({
  app: appReducer,
  landing_page: landingPageReducer,
});
