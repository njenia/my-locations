import { combineReducers } from "redux";
import entitiesReducer from "./entities";
import { locationsListReducer } from "../location";

export default combineReducers({
  entities: entitiesReducer,
  locationsList: locationsListReducer
});
