import { takeLatest } from "redux-saga/effects";
import { authcheck } from "../slices/user";
import { handleUserAuth } from "./handlers/user";

// add reducers & handlers here
export function* watcherSaga() {
  yield takeLatest(authcheck, handleUserAuth);
}
