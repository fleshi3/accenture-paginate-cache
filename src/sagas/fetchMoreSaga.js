import { takeLatest, put, call, select } from "redux-saga/effects";
import axios from "axios";
import { CARDS_FETCH_MORE } from "../redux/actionTypes";
import {
  cardsFetchMoreSuccess,
  cardsFetchMoreFailed
} from "../redux/actions/index";
import * as selectors from "../redux/store/selectors";

// API call (axios)
const callApi = pageToBeFetched => {
  return axios({
    method: "get",
    url: process.env.REACT_APP_API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      apiToken: process.env.REACT_APP_API_KEY
    },
    params: {
      ticketType: "incident",
      sortDirection: "DESC",
      page: pageToBeFetched,
      perPage: 48
    }
  });
};

// FETCH_MORE_SAGA
function* onFetchMoreCards() {
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

// WATCHER_SAGA
export default function* fetchMoreSaga() {
  yield takeLatest(CARDS_FETCH_MORE, onFetchMoreCards);
}

/* Watches for instances of INCREMENT_PAGE before
 * checking caching conditions. */
