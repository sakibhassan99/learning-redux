import { createStore } from "redux";
import { products } from "./products";

// ------------------------ Managing Complex State ------------------------
const initialState = {
  products: products,
  cardItems: [],
  wishList: [],
};

const CARD_ADD_ITEM = "card/addItem";
const CARD_REMOVE_ITEM = "card/removeItem";
const CARD_INCREASE_ITEM_QUANTITY = "card/increaseItemQuantity";
const CARD_DECREASE_ITEM_QUANTITY = "card/decreaseItemQuantity";
const WISHLIST_ADD_ITEM = "wishList/addItem";
const WISHLIST_REMOVE_ITEM = "wishList/removeItem";

function reducer(state = initialState, action) {
  switch (action.type) {
    case CARD_ADD_ITEM:
      return { ...state, cardItems: [...state.cardItems, action.payload] };
    case CARD_REMOVE_ITEM:
      return {
        ...state,
        cardItems: state.cardItems.filter(
          (item) => action.payload.productId !== item.productId
        ),
      };
    case CARD_INCREASE_ITEM_QUANTITY:
      return {
        ...state,
        cardItems: state.cardItems.map((cardItem) => {
          if (cardItem.productId === action.payload.productId) {
            return { ...cardItem, quantity: cardItem.quantity + 1 };
          }
          return cardItem;
        }),
      };
    case CARD_DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        cardItems: state.cardItems
          .map((cardItem) => {
            if (cardItem.productId === action.payload.productId) {
              return { ...cardItem, quantity: cardItem.quantity - 1 };
            }
            return cardItem;
          })
          .filter((cardItem) => cardItem.quantity > 0),
      };
    case WISHLIST_ADD_ITEM:
      return { ...state, wishList: [...state.wishList, action.payload] };
    case WISHLIST_REMOVE_ITEM:
      return {
        ...state,
        wishList: state.wishList.filter(
          (wishListItem) => action.payload.productId !== wishListItem.productId
        ),
      };

    default:
      return state;
  }
}
const store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__?.());

store.dispatch({
  type: CARD_ADD_ITEM,
  payload: { productId: 10, quantity: 1 },
});
store.dispatch({
  type: CARD_ADD_ITEM,
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
