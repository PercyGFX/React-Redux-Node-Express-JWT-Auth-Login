import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userReducer from "./slices/user";
import { watcherSaga } from "./sagas/rootSaga";

//create saga middleware
const sagaMiddleware = createSagaMiddleware();

//add middleware to an array.. add more middlewares if you have
const middleware = [sagaMiddleware];

// configure redux store
const store = configureStore({
  reducer: {
    user: userReducer, // Add your more reducers below
  },
  // this is middlewares
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

// Run the watcherSaga.. connect rootSaga here
sagaMiddleware.run(watcherSaga);

export default store;
