// src/store/reducers/productReducer.js
import {
  SET_PRODUCTS,
  SET_TOTAL,
  SET_PRODUCT_LOADING,
  SET_PRODUCT_ERROR,
  SET_CATEGORY,
  SET_SORT,
  SET_FILTER,
  SET_LIMIT,
  SET_OFFSET,
  SET_CURRENT_PAGE,
  // YENİ: Product Detail import'ları
  SET_PRODUCT_DETAIL,
  SET_PRODUCT_DETAIL_LOADING,
  SET_PRODUCT_DETAIL_ERROR,
} from "../actions/productActions";

const initialState = {
  products: [],
  total: 0,
  loading: false,
  error: null,
  category: null,
  sort: null,
  filter: null,
  limit: 25,
  offset: 0,
  currentPage: 1,
  // YENİ: Product Detail state
  productDetail: null,
  productDetailLoading: false,
  productDetailError: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case SET_TOTAL:
      return { ...state, total: action.payload };
    case SET_PRODUCT_LOADING:
      return { ...state, loading: action.payload };
    case SET_PRODUCT_ERROR:
      return { ...state, error: action.payload };
    case SET_CATEGORY:
      return { ...state, category: action.payload };
    case SET_SORT:
      return { ...state, sort: action.payload };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    case SET_LIMIT:
      return { ...state, limit: action.payload };
    case SET_OFFSET:
      return { ...state, offset: action.payload };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    // YENİ: Product Detail case'leri
    case SET_PRODUCT_DETAIL:
      return { ...state, productDetail: action.payload };
    case SET_PRODUCT_DETAIL_LOADING:
      return { ...state, productDetailLoading: action.payload };
    case SET_PRODUCT_DETAIL_ERROR:
      return { ...state, productDetailError: action.payload };
    default:
      return state;
  }
};

export default productReducer;
