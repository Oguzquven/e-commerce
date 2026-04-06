// src/store/reducers/orderReducer.js
import {
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_ERROR,
  SET_ORDERS,
  SET_ORDER_LOADING,
  SET_ORDER_ERROR,
} from "../actions/orderActions";

const initialState = {
  orders: [],
  loading: false,
  error: null,
  currentOrder: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        currentOrder: action.payload,
        orders: [action.payload, ...state.orders],
        error: null,
      };

    case CREATE_ORDER_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case SET_ORDERS:
      return {
        ...state,
        orders: action.payload,
        loading: false,
        error: null,
      };

    case SET_ORDER_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case SET_ORDER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default orderReducer;
