import {
  CARDS_FETCH_FAILED,
  CARDS_FETCH_SUCCESS,
  CARDS_FETCH_MORE_FAILED,
  CARDS_FETCH_MORE_SUCCESS,
  INCREMENT_PAGE,
  DECREMENT_PAGE
} from "../actionTypes";

//  API requests
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

// Additional API requests
export function cardsFetchMoreSuccess(responseBody) {
  return {
    type: CARDS_FETCH_MORE_SUCCESS,
    payload: responseBody
  };
}

export function cardsFetchMoreFailed(e) {
  return {
    type: CARDS_FETCH_MORE_FAILED,
    error: e
  };
}

//  Pagination requests
export function incrementPage() {
  return {
    type: INCREMENT_PAGE
  };
}

export function decrementPage() {
  return {
    type: DECREMENT_PAGE
  };
}
