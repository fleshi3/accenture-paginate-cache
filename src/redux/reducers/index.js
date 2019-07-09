import {
  CARDS_FETCH,
  CARDS_FETCH_FAILED,
  CARDS_FETCH_SUCCESS,
  CARDS_FETCH_MORE,
  CARDS_FETCH_MORE_FAILED,
  CARDS_FETCH_MORE_SUCCESS,
  INCREMENT_PAGE,
  DECREMENT_PAGE,
  INSPECT_CARD,
  DISMOUNT_CARD
} from "../actionTypes";

const initialState = {
  data: [],
  inspectCard: {},
  loading: false,
  loadingMore: false,
  inspecting: false,
  error: "",
  currentPage: 1,
  totalPages: null,
  cardsPerPage: 12,
  pageToBeFetched: 0 /* note: API uses "0" as the first page */,
  endOfCache: 6,
  xTotalCount: null
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
    case INSPECT_CARD:
      return {
        ...state,
        inspecting: true,
        inspectCard: action.payload
      };
    case DISMOUNT_CARD:
      return {
        ...state,
        inspecting: false,
        inspectCard: {
          coreData: {},
          serviceData: {}
        }
      };
    default:
      return state;
  }
};

export default testApp;
