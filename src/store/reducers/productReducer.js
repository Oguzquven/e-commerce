// src/store/reducers/productReducer.js
import {
  SET_PRODUCTS,
  SET_TOTAL,
  SET_PRODUCT_LOADING,
} from "../actions/productActions";

const initialState = {
  products: [],
  total: 0,
  loading: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case SET_TOTAL:
      return { ...state, total: action.payload };
    case SET_PRODUCT_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default productReducer;
