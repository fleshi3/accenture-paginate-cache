import {
  CARDS_FETCH,
  CARDS_FETCH_FAILED,
  CARDS_FETCH_SUCCESS,
  CARDS_FETCH_MORE,
  CARDS_FETCH_MORE_FAILED,
  CARDS_FETCH_MORE_SUCCESS,
  INCREMENT_PAGE,
  DECREMENT_PAGE
} from "../actionTypes";

const initialState = {
  data: [],
  loading: false,
  loadingMore: false,
  error: "",
  currentPage: 1,
  totalPages: 7,
  pageToBeFetched: 1 /* note: API uses "0" as the first page */,
  endOfCache: 4
};

const testApp = (state = initialState, action) => {
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
        data: action.payload
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
        loading: false,
        loadingMore: false,
        pageToBeFetched: state.pageToBeFetched + 1,
        endOfCache: state.endOfCache + 4,
        data: [...state.data, ...action.payload]
      };
    case INCREMENT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1
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
