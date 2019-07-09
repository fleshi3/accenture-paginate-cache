import { combineReducers } from "redux";
import cards from "./cards";
import pages from "./pages";
import inspect from "./inspect";

const rootReducer = combineReducers({
  cards,
  pages,
  inspect
});

export default rootReducer;
