import { takeLatest, put, call, select } from "redux-saga/effects";
import axios from "axios";
import { CARDS_FETCH } from "../redux/actionTypes";
import { cardsFetchSuccess, cardsFetchFailed } from "../redux/actions/index";
import * as selectors from "../redux/store/selectors";

// API call
const callApi = () => {
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
      page: 0,
      perPage: 72
    }
  });
};

// Calculate total pages from response header
const calcTotalPages = (response, cardsPerPage) => {
  const xTotalCount = parseInt(response.headers["x-total-count"], 10);
  return Math.ceil(xTotalCount / cardsPerPage);
};

// fetch saga (AXIOS)
export default function* fetchSaga() {
  yield takeLatest(CARDS_FETCH, function* onFetchCards() {
    try {
      const cardsPerPage = yield select(selectors.cardsPerPage);
      const response = yield call(callApi);
      const totalPages = yield call(calcTotalPages, response, cardsPerPage);
      yield put(cardsFetchSuccess(response, totalPages));
    } catch (err) {
      yield put(cardsFetchFailed(err));
    }
  });
}
