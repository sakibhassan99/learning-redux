import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    list: [],
    error: "",
  },
  reducers: {
    fetchProducts(state) {
      state.isLoading = true;
    },
    fetchProductsError(state, action) {
      state.isLoading = false;
      state.error = action.payload || "Something went wrong";
    },
    updateAllProducts(state, action) {
      state.isLoading = false;
      state.list = action.payload;
    },
  },
});

export default slice.reducer;

const { fetchProducts, updateAllProducts, fetchProductsError } = slice.actions;

export const getAllProducts = () => (dispatch) => {
  dispatch(fetchProducts());
  fetch(`https://fakestoreapi.com/products`)
    .then((res) => res.json())
    .then((data) => {
      dispatch(updateAllProducts(data));
    })
    .catch((err) => {
      dispatch(fetchProductsError());
    });
};

export const getAllProductsData = (state) => state.products;
export const getProductsLoadingState = (state) => state.products.isLoading;
export const getProductsError = (state) => state.products.error;
