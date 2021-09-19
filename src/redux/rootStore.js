import { combineReducers } from "redux";
import { cakeReducer } from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import { toyReducer } from "./toys/toyReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  toy: toyReducer,
});

export default rootReducer;
