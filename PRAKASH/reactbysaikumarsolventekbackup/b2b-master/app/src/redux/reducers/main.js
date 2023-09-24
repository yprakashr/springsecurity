import { combineReducers } from "redux";
import { cartReducer } from "./cart.reducer";
import { backOrderReducer } from "./backorder.reducer";
import userReducer from "./user.reducer"

const rootReducer = combineReducers({
  cartReducer,
  backOrderReducer,
  userReducer
});

export default rootReducer;
