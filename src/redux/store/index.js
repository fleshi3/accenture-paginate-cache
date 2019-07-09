import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers/index";

// Saga Imports
import rootSaga from "../../sagas/rootSaga";

// Init Redux-Saga
const sagaMiddleWare = createSagaMiddleware();

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer /* preloadedState, */,
  composeEnhancers(applyMiddleware(sagaMiddleWare))
);
/* eslint-enable */
sagaMiddleWare.run(rootSaga);

export default store;
