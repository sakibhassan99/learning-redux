import { combineReducers, createStore } from "redux";
import cartReducer from "./cartReducer";
import productsReducer from "./productsReducer";
import wishListReducer from "./wishListReducer";

// ------------------------ Reducers ------------------------

const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
});

export const store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__?.());
