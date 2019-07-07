import { all } from "redux-saga/effects";
import fetchSaga from "./fetchSaga";
import fetchMoreSaga from "./fetchMoreSaga";

export default function* rootSaga() {
  yield all([fetchSaga(), fetchMoreSaga()]);
}
