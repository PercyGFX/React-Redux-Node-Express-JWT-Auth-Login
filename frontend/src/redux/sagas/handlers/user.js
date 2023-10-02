import { call, put } from "redux-saga/effects";
import { requestUserAuth } from "../requests/user";
import { login } from "../../slices/user";

// generator fucntion for users
export function* handleUserAuth(action) {
  try {
    // call api
    const response = yield call(requestUserAuth(action.token));
    const { data } = response;

    // store data to reducer
    yield put(
      login({
        username: data.username,
        isAuthenticated: data.success,
      })
    );
  } catch (err) {
    console.log(err);
  }
}
