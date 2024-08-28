import { combineReducers, createStore } from "redux";
import cartReducer, { CART_ADD_ITEM } from "./cartReducer";
import productsReducer from "./productsReducer";
import wishListReducer from "./wishListReducer";
import { myCombineReducer } from "./myCombineReducer";

// ------------------------ Creating Own Combine Reducer ------------------------

const reducer = myCombineReducer({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
});

const store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__?.());

store.dispatch({
  type: CART_ADD_ITEM,
  payload: { productId: 10, quantity: 1 },
});
store.dispatch({
  type: CART_ADD_ITEM,
  payload: { productId: 12, quantity: 1 },
});
