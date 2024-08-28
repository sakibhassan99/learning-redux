// Actions
const WISHLIST_ADD_ITEM = "wishList/addItem";
const WISHLIST_REMOVE_ITEM = "wishList/removeItem";

// Actions Creator
export function wishListAddItem(productId) {
  return {
    type: WISHLIST_ADD_ITEM,
    payload: { productId },
  };
}

export function wishListRemoveItem(productId) {
  return {
    type: WISHLIST_REMOVE_ITEM,
    payload: { productId },
  };
}

// Reducer
export default function wishListReducer(state = [], action) {
  switch (action.type) {
    case WISHLIST_ADD_ITEM:
      return [...state, action.payload];
    case WISHLIST_REMOVE_ITEM:
      return state.filter(
        (wishListItem) => action.payload.productId !== wishListItem.productId
      );
    default:
      return state;
  }
}
