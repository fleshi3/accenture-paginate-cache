import { takeLatest, put, select, all } from "redux-saga/effects";
import { INCREMENT_PAGE, CARDS_FETCH_MORE } from "../redux/actionTypes";
import * as selectors from "../redux/store/selectors";

// CACHE_CONDITIONS_SAGA
function* onCacheConditionsMet() {
  const [currentPage, endOfCache] = yield all([
    yield select(selectors.currentPage),
    yield select(selectors.endOfCache)
  ]);
  if (currentPage >= endOfCache) {
    yield put({ type: CARDS_FETCH_MORE });
  }
}

/*  Checks to see if current page is currently greater or equal to
 *  the number of pages cached in storage.
 *  When conditions are met another fetch request is made. */

// WATCHER_SAGA
export default function* cacheSaga() {
  yield takeLatest(INCREMENT_PAGE, onCacheConditionsMet);
}

/* Watches for instances of INCREMENT_PAGE before
 * checking caching conditions. */
