import { combineReducers } from "redux";
import { coinsReducer } from "./coinsReducer";
const reducers = combineReducers({
  allcoins: coinsReducer,
});
export default reducers;
