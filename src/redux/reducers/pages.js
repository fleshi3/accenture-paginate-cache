/* --- IMPORT: Action Types --- */
import { INCREMENT_PAGE, DECREMENT_PAGE } from "../actionTypes";

/* --- INITIAL STATE --- */
const initialState = {
  currentPage: 1,
  cardsPerPage: 12
};

/* --- REDUCER: Increments and decrements currentPage when triggered --- */
const pages = (state = initialState, action) => {
  switch (action.type) {
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

export default pages;
