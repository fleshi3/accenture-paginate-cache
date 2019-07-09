/* --- IMPORT: Action Types --- */
import {
  CARDS_FETCH,
  CARDS_FETCH_FAILED,
  CARDS_FETCH_SUCCESS,
  CARDS_FETCH_MORE,
  CARDS_FETCH_MORE_FAILED,
  CARDS_FETCH_MORE_SUCCESS
} from "../actionTypes";

/* --- INITIAL STATE --- */
const initialState = {
  data: [],
  loading: false,
  loadingMore: false,
  error: "",
  totalPages: null,
  pageToBeFetched: 0 /* Note: API uses "0" as the first page */,
  endOfCache: 6 /* Note: No. of pages are cached at a time */
};

/* --- REDUCER: Handles fetch requests and updates total pages --- */
const cards = (state = initialState, action) => {
  switch (action.type) {
    case CARDS_FETCH:
      return {
        ...state,
        loading: true
      };
    case CARDS_FETCH_FAILED:
      return {
        ...state,
        loading: true,
        data: [],
        error: action.error
      };
    case CARDS_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        totalPages: action.totalPages,
        pageToBeFetched: state.pageToBeFetched + 1
      };
    case CARDS_FETCH_MORE:
      return {
        ...state,
        loadingMore: true
      };
    case CARDS_FETCH_MORE_FAILED:
      return {
        ...state,
        loading: true,
        error: action.error
      };
    case CARDS_FETCH_MORE_SUCCESS:
      return {
        ...state,
        loadingMore: false,
        pageToBeFetched: state.pageToBeFetched + 1,
        endOfCache: state.endOfCache + 6,
        data: [
          ...state.data,
          ...action.payload
        ] /* previousState and incoming cards are spread */
      };
    default:
      return state;
  }
};

export default cards;
