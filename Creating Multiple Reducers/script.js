import { combineReducers, createStore } from "redux";
import cartReducer, { CART_ADD_ITEM } from "./cartReducer";
import productsReducer from "./productsReducer";
import wishListReducer, {
  WISHLIST_ADD_ITEM,
  WISHLIST_REMOVE_ITEM,
} from "./wishListReducer";

// ------------------------ Creating Multiple Reducers ------------------------

const reduce = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
});

console.log(reduce);

const store = createStore(reduce, __REDUX_DEVTOOLS_EXTENSION__?.());

store.dispatch({
  type: CART_ADD_ITEM,
  payload: { productId: 10, quantity: 1 },
});
store.dispatch({
  type: CART_ADD_ITEM,
  payload: { productId: 12, quantity: 1 },
});
store.dispatch({
  type: WISHLIST_ADD_ITEM,
  payload: { productId: 12 },
});
store.dispatch({
  type: WISHLIST_ADD_ITEM,
  payload: { productId: 18 },
});
store.dispatch({
  type: WISHLIST_REMOVE_ITEM,
  payload: { productId: 12 },
});

console.log(store.getState());
