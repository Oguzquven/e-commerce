// src/store/actions/productActions.js
import api from "../../api/api";

// Action Types
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_TOTAL = "SET_TOTAL";
export const SET_PRODUCT_LOADING = "SET_PRODUCT_LOADING";

// Action Creators
export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const setTotal = (total) => ({
  type: SET_TOTAL,
  payload: total,
});

export const setProductLoading = (loading) => ({
  type: SET_PRODUCT_LOADING,
  payload: loading,
});

// Thunk - Fetch Products
export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(setProductLoading(true));

    try {
      const response = await api.get("/products");
      const { products, total } = response.data;

      dispatch(setProducts(products));
      dispatch(setTotal(total));

      return { success: true, products, total };
    } catch (error) {
      console.error("Error fetching products:", error);
      return { success: false, error: error.message };
    } finally {
      dispatch(setProductLoading(false));
    }
  };
};
