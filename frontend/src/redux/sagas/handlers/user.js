import { call, put } from "redux-saga/effects";
import { requestUserAuth } from "../requests/user";
import { authcheck } from "../../slices/user";

// generator fucntion for users
export function* handleUserAuth(action) {
  try {
    // get token from payload
    const token = action.payload.token;
    console.log("calling reuqest from handler");

    // handerler with arguments
    const response = yield call(requestUserAuth(token));
    const { data } = response;

    console.log("go data and storing on the state suing reducer");
    // store data to reducer
    yield put(
      authcheck({
        username: data.username,
        isLogged: data.success,
        isAuthenticated: data.success,
      })
    );
  } catch (err) {
    console.log("handler err " + err);
  }
}
