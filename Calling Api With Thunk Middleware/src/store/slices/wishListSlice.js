import { createSlice } from "@reduxjs/toolkit";

const findItemIndex = (state, action) =>
  state.findIndex((item) => item.productId === action.payload.productId);

const slice = createSlice({
  name: "wishList",
  initialState: [],
  reducers: {
    addWishListItem(state, action) {
      return state.push(action.payload);
    },
    removeWishListItem(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state.splice(existingItemIndex, 1);
    },
  },
});

export default slice.reducer;
export const { addWishListItem, removeWishListItem } = slice.actions;
