import {
  CARDS_FETCH,
  CARDS_FETCH_FAILED,
  CARDS_FETCH_SUCCESS
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
    default:
      return state;
  }
};

export default testApp;
