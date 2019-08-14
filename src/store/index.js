import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { loadState } from "../common/utils/external-storage-api";

const store = createStore(
  rootReducer,
  loadState(),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
