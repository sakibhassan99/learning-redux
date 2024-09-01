import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

const findItemIndex = (state, action) =>
  state.list.findIndex((item) => item.productId === action.payload.productId);

export const getAllCartItemsData = createAsyncThunk(
  "cart/fetchCartItems",
  async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/carts/5`);
      return res.json();
    } catch (err) {
      throw new Error(err);
    }
  }
);

const Slice = createSlice({
  name: "cart",
  initialState: {
    list: [],
    isLoading: false,
    error: "",
  },
  reducers: {
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
  extraReducers: (builder) => {
    builder
      .addCase(getAllCartItemsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCartItemsData.fulfilled, (state, action) => {
        state.list = action.payload.products;
        state.isLoading = false;
      })
      .addCase(getAllCartItemsData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export default Slice.reducer;
export const {
  addCartItem,
  removeCartItem,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
} = Slice.actions;

const getCartItemsList = (state) => state.cartItems.list;
const getProductsList = (state) => state.products.list;

export const getAllCartItems = createSelector(
  [getCartItemsList, getProductsList],
  (cartItemsList, productsList) => {
    return cartItemsList
      .map(({ productId, quantity }) => {
        const cartItem = productsList.find(
          (product) => product.id === productId
        );
        return { ...cartItem, quantity };
      })
      .filter(({ title }) => title);
  }
);

export const getCartItemsLoadingState = (state) => state.cartItems.isLoading;
export const getCartItemsError = (state) => state.cartItems.error;
