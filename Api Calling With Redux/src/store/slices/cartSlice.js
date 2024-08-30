import { createSlice } from "@reduxjs/toolkit";

const findItemIndex = (state, action) =>
  state.list.findIndex((item) => item.productId === action.payload.productId);

const Slice = createSlice({
  name: "cart",
  initialState: {
    list: [],
    isLoading: false,
    error: "",
  },
  reducers: {
    fetchCartProducts(state) {
      state.isLoading = true;
    },
    fetchCartError(state, action) {
      state.isLoading = false;
      state.error = action.payload || "Something went wrong";
    },
    loadCartItems(state, action) {
      state.list = action.payload.products;
      state.isLoading = false;
    },
    addCartItem(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      if (existingItemIndex !== -1) {
        state.list[existingItemIndex].quantity += 1;
      } else {
        state.list.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCartItem(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state.list.splice(existingItemIndex, 1);
    },
    increaseCartItemQuantity(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      if (existingItemIndex !== -1) {
        state.list[existingItemIndex].quantity += 1;
      }
    },
    decreaseCartItemQuantity(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      if (existingItemIndex !== -1) {
        state.list[existingItemIndex].quantity -= 1;
        if (state.list[existingItemIndex].quantity === 0) {
          state.list.splice(existingItemIndex, 1);
        }
      }
    },
  },
});

export default Slice.reducer;
export const {
  loadCartItems,
  fetchCartProducts,
  fetchCartError,
  addCartItem,
  removeCartItem,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
} = Slice.actions;
