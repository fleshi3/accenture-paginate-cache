/* --- IMPORT: REDUX SAGA & TESTING TOOL --- */
import { select, call, put } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
/* --- IMPORT: SAGAS --- */
import cacheSaga, { onCacheConditionsMet } from "./cacheSaga";
/* --- IMPORT: Action Types & Redux Selectors --- */
import { INCREMENT_PAGE, CARDS_FETCH_MORE } from "../redux/actionTypes";
import * as selectors from "../redux/store/selectors";

/* --- TESTS: fetchMoreSaga* --- */
describe("cacheSaga*", () => {
  it("calls selectors as soon as INCREMENT_PAGE is dispatched", () => {
    expectSaga(cacheSaga)
      .provide([
        [call(onCacheConditionsMet)],
        [select(selectors.currentPage)],
        [select(selectors.endOfCache)]
      ])
      .dispatch({ type: INCREMENT_PAGE })
      .run();
  });
  it("then dispatches CARDS_FETCH_MORE action", () => {
    expectSaga(cacheSaga)
      .provide([
        [call(onCacheConditionsMet)],
        [select(selectors.currentPage)],
        [select(selectors.endOfCache)],
        [put({ type: CARDS_FETCH_MORE })]
      ])
      .dispatch({ type: INCREMENT_PAGE })
      .run();
  });
});
