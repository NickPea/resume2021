/**
 * APP SAGA
 */

import { take, call, put } from "redux-saga/effects";

export function* appSaga() {
  yield take("APP->SAGA:APP/START");
  yield put({ type: "SAGA->REDUX:APP/STARTED" });
}
