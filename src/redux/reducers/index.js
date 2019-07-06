import {
  CARDS_FETCH,
  CARDS_FETCH_FAILED,
  CARDS_FETCH_SUCCESS,
  INCREMENT_PAGE,
  DECREMENT_PAGE
} from "../actionTypes";

const initialState = {
  data: [],
  loading: false,
  error: "",
  currentPage: 1,
  totalPages: 4
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
