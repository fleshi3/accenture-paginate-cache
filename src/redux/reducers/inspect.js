/* --- IMPORT: Action Types --- */
import { INSPECT_CARD, DISMOUNT_CARD } from "../actionTypes";

/* --- INITIAL STATE --- */
const initialState = {
  inspectCard: {},
  inspecting: false
};

/* --- REDUCER: Handles cards when being inspected --- */
const testApp = (state = initialState, action) => {
  switch (action.type) {
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
        inspectCard: {}
      };
    default:
      return state;
  }
};

export default testApp;
