import { combineReducers, createStore } from "redux";
import cartReducer, {
  CART_ADD_ITEM,
  cartAddItem,
  cartRemoveItem,
} from "./cartReducer";
import productsReducer from "./productsReducer";
import wishListReducer, { wishListAddItem } from "./wishListReducer";

// ------------------------ Working With Action Creators ------------------------

const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
});

const store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__?.());

store.dispatch(wishListAddItem(14));
store.dispatch(cartAddItem(12, 5));
store.dispatch(cartRemoveItem(12));
