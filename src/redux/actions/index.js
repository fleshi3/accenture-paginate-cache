import {
  TEST_ACTION,
  CARDS_FETCH,
  CARDS_FETCH_FAILED,
  CARDS_FETCH_SUCCESS
} from "../actionTypes";

export function cardsFetchSuccess(responseBody) {
  return {
    type: CARDS_FETCH_SUCCESS,
    payload: responseBody
  };
}

export function cardsFetchFailed(e) {
  return {
    type: CARDS_FETCH_FAILED,
    error: e
  };
}
