import {combineReducers} from "redux"
import { locationsReducer } from "./location"
import { categoriesReducer } from "./category"

export default combineReducers({
  locations: locationsReducer,
  categories: categoriesReducer
})
