/* --- IMPORT: REDUX SAGA --- */
import { takeLatest, put, call, select } from "redux-saga/effects";
/* --- IMPORT: API --- */
import { callApi } from "../api/callApi";
/* --- IMPORT: Actions and Redux selectors --- */
import { CARDS_FETCH } from "../redux/actionTypes";
import { cardsFetchSuccess, cardsFetchFailed } from "../redux/actions/index";
import * as selectors from "../redux/store/selectors";

/* --- METHOD: Calculate total pages from response header --- */
export const calcTotalPages = (response, cardsPerPage) => {
  const xTotalCount = parseInt(response.headers["x-total-count"], 10);
  return Math.ceil(xTotalCount / cardsPerPage);
};

/* --- SAGA: API call & Action dispatch --- */
export function* onFetchCards() {
  try {
    const pageToBeFetched = yield select(selectors.pageToBeFetched);
    const cardsPerPage = yield select(selectors.cardsPerPage);
    const response = yield call(callApi, pageToBeFetched);
    const totalPages = yield call(calcTotalPages, response, cardsPerPage);
    yield put(cardsFetchSuccess(response, totalPages));
  } catch (err) {
    yield put(cardsFetchFailed(err));
  }
}

/* --- SAGA: CARDS_FETCH Watcher --- */
export default function* fetchSaga() {
  yield takeLatest(CARDS_FETCH, onFetchCards);
}
