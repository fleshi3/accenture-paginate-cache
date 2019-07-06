import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import testApp from "../reducers/index";

// Saga Imports
import { fetchSaga } from "../../sagas/fetchSaga";
// Init Redux-Saga
const sagaMiddleWare = createSagaMiddleware();

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  testApp /* preloadedState, */,
  composeEnhancers(applyMiddleware(sagaMiddleWare))
);
/* eslint-enable */
sagaMiddleWare.run(fetchSaga);

export default store;
