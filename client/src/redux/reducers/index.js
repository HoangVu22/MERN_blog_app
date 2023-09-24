import { combineReducers } from "redux"; //là 1 method về thư viện redux
import posts from "./posts";
import modal from "./modal";

export default combineReducers({
  posts,
  modal,
});
