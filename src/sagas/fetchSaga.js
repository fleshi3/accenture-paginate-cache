import { takeLatest, put, call } from "redux-saga/effects";
import {
  CARDS_FETCH,
  CARDS_FETCH_FAILED,
  CARDS_FETCH_SUCCESS
} from "../redux/actionTypes";
import { cardsFetchSuccess, cardsFetchFailed } from "../redux/actions/index";

//  dummy link to API
const API_URL =
  "https://dh-atratadev.atrmywizard360.com/atr-gateway/ticket-management/api/v1/tickets?ticketType=incident&sortDirection=DESC&page=0&perPage=1";
//  API TOKEN
const API_TOKEN =
  "eyJhbGciOiJSUzUxMiIsInppcCI6IkRFRiJ9.eNqcWFFvmzAQ_isRz9mUtmq19WkuuNQLYGbMWmmaLJpYE2oJWULaSVH_-wwhaZN04zMveSC-47u77747vHaWq3vn0smmRT5zhk62muZ6NtHm0bO-Nw8mC51VeupcnpxfnJ6Nzk4vzk9Go6Ez14siXy7zcrZ0Ln-snVlW1EYsVCSOA-YSyXiUKEGJZ7zMF6UxqHJtDq9fXoa78y6JFPWYVDyVCfOoIsoXPI3_ZyNDJZk7plJJGsYBkbTzNcaEpJKHDSol0gAycXl0zXx1K5iklt4RmzYIekfdtLG0MPJoQNGzuyxhRtvToSkki4DwTZnRTJmjNCQswCt3bNEdxfgKR3RMWI8J6kq83ts8dUUSJiqh4jtzMboGjHS3Tx0pEabOfSnX9QLyzTjmYnwd8NvOwyaXTfN2Q6ndfuVXSCJayI1LlcYe6fZcAw448RD3cZD6LOrV4zY9uIHvGkCoBfEV8UIWdSQ8NZwCkNRpaUPtLHn9VuXeEHnFe7RBN5YdTaAEtq-gNV06E7JH1yQicXLDpV0bdYMyKhFxya5bzeijepAseW2a8EmF8aDOpIWaGvQhFT5VkoDVbdEAcrEnvRAUOFLjPaYiZEmC6NxhTa2GDCznSNnfgIZk9B26Q30VEveGRVQFlIgImV-HKcJpaTEZO0M2Z0MSEZ-GNJJQQtFN4I1EWozShKfCBYcvScZW4Bttx4R4Hw0-Vq3mvxTM96lAdQveAvrtpQj0gFt0JwSDRR69sxu4PVQZ3rSQ4F411uI7qZm3QTnJHgdiNZvqyQNMEyze3XGkdep9K4FWor39D5oSO75ajkIEdxKZAJs2xspVoxc05IYC-I7e-N9wLbEobraqyiKrzBf8h98rvdLoggRwaNuiSMH2cooI14GKAq3yZqRi3Kxlw2YbATA0RepVfngLaChvx0og3xvBQ9webRTQUDyUdUiFwU-Zd-5ArC8EkI1ku71YTBC7Gyv4LuY14jSGPoGPRg-SoIY7_zj4c-j8WpSreX0t6BApWgUwj6t88qArf_en1Fkx8PSTfiznhZ5VA7ec6oHQT7l-1otlbaL_zDc3j59Hn0YX5-ZBkeWP2_vKL83vx0lZOC9_AQAA__8.fzLAQHnY-XWPJQwS1uSLw8pkrFM7J3O60-5mNup0xNro0VNG4uIuKPwP258xRiqlIm9wpmCvkMOk22OitwOL4wfOFyNMXpfuVXb0ourpHPpOqByACP6YSEz9Uy3uzzKFDG67Aj_YiLLJgP0wYf359BTEgP6Wi2i9sd7uDaNLcXY";
//  fetch options
const FETCH_OPTIONS = {
  method: "GET",
  body: JSON.stringify(),
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
    //  apiToken: API_TOKEN
  }
};

//  fetch saga
export default function* fetchSaga() {
  yield takeLatest(CARDS_FETCH, function* onFetchCards() {
    try {
      const response = yield call(fetch, API_URL, FETCH_OPTIONS);
      const responseBody = yield response.json();
      yield put(cardsFetchSuccess(responseBody));
    } catch (error) {
      yield put(cardsFetchFailed(error));
    }
  });
}
