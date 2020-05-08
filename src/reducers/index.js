import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { loadingReducer } from "./loadingReducer";

export const reducers = combineReducers({
  toDos: todoReducer,
  loading: loadingReducer,
});
