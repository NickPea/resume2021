/**
 * ROOT SAGA
 */
import { all } from "redux-saga/effects";

//sagas
import { appSaga } from "./app-saga";
import { landingPageSaga } from "./langing-page-saga";

export default function* rootSaga() {
  yield all([appSaga(), landingPageSaga()]);
}
