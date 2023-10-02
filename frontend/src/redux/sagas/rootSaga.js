import { takeLatest } from "redux-saga/effects";
import { login } from "../slices/user";
import { handleUserAuth } from "./handlers/user";

export function* watcherSaga() {
  yield takeLatest(login, handleUserAuth);
}
