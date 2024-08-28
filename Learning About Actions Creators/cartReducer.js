// Actions
export const CART_ADD_ITEM = "cart/addItem";
export const CART_REMOVE_ITEM = "cart/removeItem";
export const CART_INCREASE_ITEM_QUANTITY = "cart/increaseItemQuantity";
export const CART_DECREASE_ITEM_QUANTITY = "cart/decreaseItemQuantity";

// Actions Creator
export function cartAddItem(productId, quantity) {
  return {
    type: CART_ADD_ITEM,
    payload: { productId, quantity },
  };
}

export function cartRemoveItem(productId, quantity) {
  return {
    type: CART_REMOVE_ITEM,
    payload: { productId, quantity },
  };
}

export function cartIncreaseItemQuantity(quantity) {
  return {
    type: CART_INCREASE_ITEM_QUANTITY,
    payload: { quantity },
  };
}

export function cartDecreaseItemQuantity(quantity) {
  return {
    type: CART_DECREASE_ITEM_QUANTITY,
    payload: { quantity },
  };
}

// Reducer
export default function cartReducer(state = [], action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      return [...state, action.payload];
    case CART_REMOVE_ITEM:
      return state.filter(
        (item) => action.payload.productId !== item.productId
      );
    case CART_INCREASE_ITEM_QUANTITY:
      return state.map((cartItem) => {
        if (cartItem.productId === action.payload.productId) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
    case CART_DECREASE_ITEM_QUANTITY:
      return state
        .map((cartItem) => {
          if (cartItem.productId === action.payload.productId) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.quantity > 0);
    default:
      return state;
  }
}
