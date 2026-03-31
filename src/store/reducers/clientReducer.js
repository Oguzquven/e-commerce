// src/store/reducers/clientReducer.js
import {
  SET_USER,
  SET_ROLES,
  SET_THEME,
  SET_LANGUAGE,
  SET_CATEGORIES, // YENİ EKLENDİ
} from "../actions/clientActions";

const initialState = {
  user: {},
  addressList: [],
  creditCards: [],
  roles: [],
  theme: "light",
  language: "tr",
  categories: [], // YENİ EKLENDİ
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_ROLES:
      return { ...state, roles: action.payload };
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    case SET_CATEGORIES: // YENİ CASE EKLENDİ
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};

export default clientReducer;
