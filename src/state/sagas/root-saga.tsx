/**
 * ROOT SAGA
 */
import { all } from "redux-saga/effects";

//sagas
import startUp from "./start-up-saga";

export default function* rootSaga() {
  yield all([startUp()]);
}
