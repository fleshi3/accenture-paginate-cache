/* --- IMPORT: REDUX SAGA & TESTING TOOL --- */
import { select, call, put } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
/* --- IMPORT: SAGAS --- */
import fetchMoreSaga, { onFetchMoreCards } from "./fetchMoreSaga";
/* --- IMPORT: RELATED FUNCTIONS --- */
import { callApi } from "../api/callApi";
import * as selectors from "../redux/store/selectors";
import { CARDS_FETCH_MORE } from "../redux/actionTypes";
import { cardsFetchMoreSuccess } from "../redux/actions/index";

/* --- TESTS: fetchMoreSaga* --- */
describe("fetchMoreSaga*", () => {
  it("waits for CARDS_FETCH_MORE action and calls onFetchMoreCards*", () => {
    expectSaga(fetchMoreSaga)
      .provide([call(onFetchMoreCards)])
      .dispatch({ type: CARDS_FETCH_MORE })
      .run();
  });
});

/* --- TESTS: onFetchMoreCards* --- */
describe("onFetchMoreCards*", () => {
  const responseBody = {
    data: { coreData: { number: "123" } }
  };
  const cardsPerPage = 12;
  const totalPages = 2;
  const pageToBeFetched = 0;
  it("calls selector cardsPerPage", () => {
    expectSaga(fetchMoreSaga)
      .provide([[select(selectors.pageToBeFetched)]])
      .dispatch({ type: CARDS_FETCH_MORE })
      .run();
  });
  it("then calls the API", () => {
    expectSaga(fetchMoreSaga)
      .provide([
        [select(selectors.cardsPerPage)],
        [call(callApi), pageToBeFetched]
      ])
      .dispatch({ type: CARDS_FETCH_MORE })
      .run();
  });
  it("calls CARDS_FETCH_MORE_SUCESS action and passes data", () => {
    expectSaga(fetchMoreSaga)
      .provide([
        [select(selectors.cardsPerPage)],
        [call(callApi)],
        [put(cardsFetchMoreSuccess), responseBody]
      ])
      .dispatch({ type: CARDS_FETCH_MORE })
      .run();
  });
});
