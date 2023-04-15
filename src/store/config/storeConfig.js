import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { chartReducer } from "../reducers/chartReducer";

export const chartStore = () => {
  const store = createStore(chartReducer, composeWithDevTools());
  return store;
};