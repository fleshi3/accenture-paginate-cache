import { all } from "redux-saga/effects";
import fetchSaga from "./fetchSaga";
import cacheSaga from "./cacheSaga";
import fetchMoreSaga from "./fetchMoreSaga";

export default function* rootSaga() {
  yield all([fetchSaga(), cacheSaga(), fetchMoreSaga()]);
}
