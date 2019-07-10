/* --- IMPORT: REDUX --- */
import { takeLatest, put, call, select } from "redux-saga/effects";
/* --- IMPORT: API --- */
import { callApi } from "../api/callApi";
/* --- IMPORT: Actions & Redux selectors --- */
import { CARDS_FETCH_MORE } from "../redux/actionTypes";
import {
  cardsFetchMoreSuccess,
  cardsFetchMoreFailed
} from "../redux/actions/index";
import * as selectors from "../redux/store/selectors";

/* --- SAGA: API call & Action dispatch --- */
export function* onFetchMoreCards() {
  try {
    const pageToBeFetched = yield select(selectors.pageToBeFetched);
    const response = yield call(callApi, pageToBeFetched);
    const responseBody = yield response.data;
    yield put(cardsFetchMoreSuccess(responseBody));
  } catch (err) {
    yield put(cardsFetchMoreFailed(err)); /* caught errors update the state */
  }
}

/* This function derrives the parameter "pageToBeFetched" from
 * a state selector and passes it into the API fetch function as
 * an argument. It then formats the response object to prepare it
 * for the action creator. */

/* --- SAGA: CARDS_FETCH_MORE watcher --- */
export default function* fetchMoreSaga() {
  yield takeLatest(
    CARDS_FETCH_MORE,
    onFetchMoreCards
  ); /* the latest call of CARDS_FETCH_MORE is forked */
}
