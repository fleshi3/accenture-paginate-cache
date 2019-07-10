/* --- IMPORT: REDUX SAGA & TESTING TOOL --- */
import { select, call, put } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
/* --- IMPORT: SAGAS --- */
import fetchSaga, { onFetchCards, calcTotalPages } from "./fetchSaga";
/* --- IMPORT: RELATED FUNCTIONS --- */
import { callApi } from "../api/callApi";
import * as selectors from "../redux/store/selectors";
import { CARDS_FETCH } from "../redux/actionTypes";
import { cardsFetchSuccess } from "../redux/actions/index";

/* --- TESTS: fetchSaga* --- */
describe("fetchSaga*", () => {
  it("waits for CARDS_FETCH action and calls onFetchCards*", () => {
    expectSaga(fetchSaga)
      .provide([call(onFetchCards)])
      .dispatch({ type: CARDS_FETCH })
      .run();
  });
});

/* --- TESTS: onFetchCards* --- */
describe("onFetchCards*", () => {
  const response = {
    headers: { ["x-total-count"]: 24 },
    data: { coreData: { number: "123" } }
  };
  const cardsPerPage = 12;
  const totalPages = 2;
  const pageToBeFetched = 0;
  it("calls selector pageToBeFetched", () => {
    expectSaga(fetchSaga)
      .provide([[select(selectors.pageToBeFetched)]])
      .dispatch({ type: CARDS_FETCH })
      .run();
  });
  it("calls selector cardsPerPage", () => {
    expectSaga(fetchSaga)
      .provide([[select(selectors.cardsPerPage)]])
      .dispatch({ type: CARDS_FETCH })
      .run();
  });
  it("then calls the API", () => {
    expectSaga(fetchSaga)
      .provide([[select(selectors.cardsPerPage)], [call(callApi)]])
      .dispatch({ type: CARDS_FETCH })
      .run();
  });
  it("then calculates total pages from response header", () => {
    expectSaga(fetchSaga)
      .provide([
        [select(selectors.cardsPerPage)],
        [call(callApi), pageToBeFetched],
        [call(calcTotalPages), response, cardsPerPage]
      ])
      .dispatch({ type: CARDS_FETCH })
      .run();
  });
  it("calls CARDS_FETCH_SUCESS action and passes data", () => {
    expectSaga(fetchSaga)
      .provide([
        [select(selectors.cardsPerPage)],
        [call(callApi)],
        [call(calcTotalPages), response, cardsPerPage],
        [put(cardsFetchSuccess), response, totalPages]
      ])
      .dispatch({ type: CARDS_FETCH })
      .run();
  });
});
