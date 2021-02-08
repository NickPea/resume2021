/**
 * START UP SAGA
 */

import { take, call, put } from "redux-saga/effects";

export default function* startUp() {
  yield take("APP->SAGA:APP/START");
  yield put({ type: "SAGA->REDUX:APP/STARTED" });
}
