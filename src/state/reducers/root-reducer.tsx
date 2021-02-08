/**
 * ROOT REDUCER
 */

import { combineReducers } from "redux";

//reducers
import startUpReducer from "./start-up-reducer";

//root reducer
export default combineReducers({
  app: startUpReducer,
});
