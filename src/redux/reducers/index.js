import {
  CARDS_FETCH,
  CARDS_FETCH_FAILED,
  CARDS_FETCH_SUCCESS,
  CARDS_FETCH_MORE_FAILED,
  CARDS_FETCH_MORE_SUCCESS,
  INCREMENT_PAGE,
  DECREMENT_PAGE
} from "../actionTypes";

const initialState = {
  data: [],
  loading: false,
  error: "",
  currentPage: 1,
  totalPages: 7,
  pageToBeFetched: 4 /* note: API uses "0" as the first page */,
  pageLimitReached: false
};

const limitPages = (totalPages, min, max) => {
  return Math.min(Math.max(totalPages, min), max);
};

const testApp = (state = initialState, action) => {
  switch (action.type) {
    case CARDS_FETCH:
      return {
        ...state,
        loading: true,
        data: []
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
        data: action.payload
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
        loading: false,
              data: [...state.data, ...action.payload],
              pageToBeFetched: state.pageToBeFetched + 1
      };
    case INCREMENT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
              //          totalPages: limitPages(state.totalPages + 1, 1, 6),
              //          pageToBeFetched: state.pageToBeFetched + 1
      };
    case DECREMENT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 1 || 1
      };
    default:
      return state;
  }
};

export default testApp;
