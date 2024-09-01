import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllProducts = createAsyncThunk(
  "products/fetchData",
  async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products`);
      return res.json();
    } catch (err) {
      throw new Error(err);
    }
  }
);

const slice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    list: [],
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export default slice.reducer;

export const getAllProductsData = (state) => state.products;
export const getProductsLoadingState = (state) => state.products.isLoading;
export const getProductsError = (state) => state.products.error;
