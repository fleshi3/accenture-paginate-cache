import { TEST_ACTION } from "../actionTypes";

const initialState = {
  counterValue: 0
};

const testApp = (state = initialState, action) => {
  switch (action.type) {
    case TEST_ACTION:
      return state.counterValue + 1;
    default:
      return state;
  }
};

export default testApp;
