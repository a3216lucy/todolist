import { combineReducers } from "redux";
import todo from "./todos";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({
  todo,
  visibilityFilter
});