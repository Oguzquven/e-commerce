// src/store/actions/productActions.js
import api from "../../api/api";

export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_TOTAL = "SET_TOTAL";
export const SET_PRODUCT_LOADING = "SET_PRODUCT_LOADING";
export const SET_PRODUCT_ERROR = "SET_PRODUCT_ERROR";

// Query parametreleri için state tutma
export const SET_CATEGORY = "SET_CATEGORY";
export const SET_SORT = "SET_SORT";
export const SET_FILTER = "SET_FILTER";
// Pagination
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

// YENİ: Product Detail için action types
export const SET_PRODUCT_DETAIL = "SET_PRODUCT_DETAIL";
export const SET_PRODUCT_DETAIL_LOADING = "SET_PRODUCT_DETAIL_LOADING";
export const SET_PRODUCT_DETAIL_ERROR = "SET_PRODUCT_DETAIL_ERROR";

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

export const setProductError = (error) => ({
  type: SET_PRODUCT_ERROR,
  payload: error,
});

export const setCategory = (category) => ({
  type: SET_CATEGORY,
  payload: category,
});

export const setSort = (sort) => ({
  type: SET_SORT,
  payload: sort,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

// Pagination action creators
export const setLimit = (limit) => ({
  type: SET_LIMIT,
  payload: limit,
});

export const setOffset = (offset) => ({
  type: SET_OFFSET,
  payload: offset,
});

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

// YENİ: Product Detail action creators
export const setProductDetail = (product) => ({
  type: SET_PRODUCT_DETAIL,
  payload: product,
});

export const setProductDetailLoading = (loading) => ({
  type: SET_PRODUCT_DETAIL_LOADING,
  payload: loading,
});

export const setProductDetailError = (error) => ({
  type: SET_PRODUCT_DETAIL_ERROR,
  payload: error,
});

// Thunk Action - Query parametreleri ile
export const fetchProducts =
  (params = {}) =>
  async (dispatch, getState) => {
    dispatch(setProductLoading(true));

    try {
      const { product } = getState();
      const queryParams = {
        category:
          params.category !== undefined ? params.category : product.category,
        sort: params.sort !== undefined ? params.sort : product.sort,
        filter: params.filter !== undefined ? params.filter : product.filter,
        limit: params.limit !== undefined ? params.limit : product.limit || 25,
        offset:
          params.offset !== undefined ? params.offset : product.offset || 0,
      };

      const cleanParams = Object.fromEntries(
        Object.entries(queryParams).filter(
          ([key, v]) =>
            v !== null &&
            v !== undefined &&
            v !== "" &&
            !(key === "offset" && v === 0 && !params.offset),
        ),
      );

      const queryString = new URLSearchParams(cleanParams).toString();
      const url = queryString ? `/products?${queryString}` : "/products";

      const response = await api.get(url);
      dispatch(setProducts(response.data.products));
      dispatch(setTotal(response.data.total));
    } catch (error) {
      dispatch(setProductError(error.message));
    } finally {
      dispatch(setProductLoading(false));
    }
  };

// YENİ: Thunk Action - Product Detail çekme
export const fetchProductById = (productId) => async (dispatch) => {
  dispatch(setProductDetailLoading(true));

  try {
    const response = await api.get(`/products/${productId}`);
    dispatch(setProductDetail(response.data));
  } catch (error) {
    dispatch(setProductDetailError(error.message));
  } finally {
    dispatch(setProductDetailLoading(false));
  }
};
