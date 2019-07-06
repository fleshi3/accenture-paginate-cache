import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import { CARDS_FETCH } from "../redux/actionTypes";
import { cardsFetchSuccess, cardsFetchFailed } from "../redux/actions/index";

// API call
const callApi = () => {
  return axios({
    method: "get",
    url: process.env.REACT_APP_API_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      apiToken: process.env.REACT_APP_API_KEY
    }
  });
};

// fetch saga (AXIOS)
export default function* fetchSaga() {
  yield takeLatest(CARDS_FETCH, function* onFetchCards() {
    try {
      const response = yield call(callApi);
      const responseBody = yield response.data;
      yield put(cardsFetchSuccess(responseBody));
    } catch (err) {
      yield put(cardsFetchFailed(err));
    }
  });
}
