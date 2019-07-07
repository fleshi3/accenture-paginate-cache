import { takeLatest, put, call, select, fork } from "redux-saga/effects";
import axios from "axios";
import { INCREMENT_PAGE } from "../redux/actionTypes";
import {
  cardsFetchMoreSuccess,
  cardsFetchMoreFailed
} from "../redux/actions/index";
import * as selectors from "../redux/store/selectors";

// Call totalPages selector for params

// API call
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
      perPage: 12
    }
  });
};

// fetch saga (AXIOS)
export default function* fetchMoreSaga() {
  yield takeLatest(INCREMENT_PAGE, function* onFetchMoreCards() {
    try {
      const pageToBeFetched = yield select(selectors.pageToBeFetched);
      const response = yield call(callApi, pageToBeFetched);
      const responseBody = yield response.data;
      yield put(cardsFetchMoreSuccess(responseBody));
    } catch (err) {
      yield put(cardsFetchMoreFailed(err));
      console.log(err);
    }
  });
}
