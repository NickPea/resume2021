/**
 * LANDING PAGE SAGA
 */

import axios from "axios";
import { call, put, take } from "redux-saga/effects";

export function* landingPageSaga() {
  while (true) {
    try {
      yield take("APP->SAGA:LANDING-PAGE/HYDRATE");
      const data = yield call(() => {
        return axios.get(`${window.location.origin}/api/get-landing-page-data`)
          .then(res => res.data);
      });
      yield put({
        type: "SAGA->REDUX:LANDING-PAGE/SET",
        payload: data,
      });
    } catch (error) {
      console.error("saga failed");
    }
  } //wh
} //
