// src/store/reducers/addressReducer.js
import {
  SET_ADDRESSES,
  ADD_ADDRESS,
  UPDATE_ADDRESS,
  DELETE_ADDRESS,
  SET_ADDRESS_LOADING,
  SET_ADDRESS_ERROR,
} from "../actions/addressActions";

const initialState = {
  addresses: [],
  loading: false,
  error: null,
};

const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADDRESSES:
      return {
        ...state,
        addresses: action.payload,
      };

    case ADD_ADDRESS:
      return {
        ...state,
        addresses: [...state.addresses, action.payload],
      };

    case UPDATE_ADDRESS:
      return {
        ...state,
        addresses: state.addresses.map((addr) =>
          addr.id === action.payload.id ? action.payload : addr,
        ),
      };

    case DELETE_ADDRESS:
      return {
        ...state,
        addresses: state.addresses.filter((addr) => addr.id !== action.payload),
      };

    case SET_ADDRESS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case SET_ADDRESS_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default addressReducer;
