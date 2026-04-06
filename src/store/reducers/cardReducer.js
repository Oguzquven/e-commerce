// src/store/reducers/cardReducer.js
import {
  SET_CARDS,
  ADD_CARD,
  UPDATE_CARD,
  DELETE_CARD,
  SET_CARD_LOADING,
  SET_CARD_ERROR,
} from "../actions/cardActions";

const initialState = {
  cards: [],
  loading: false,
  error: null,
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARDS:
      return { ...state, cards: action.payload, loading: false };
    case ADD_CARD:
      return { ...state, cards: [...state.cards, action.payload] };
    case UPDATE_CARD:
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload.id ? action.payload : card,
        ),
      };
    case DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.payload),
      };
    case SET_CARD_LOADING:
      return { ...state, loading: action.payload };
    case SET_CARD_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default cardReducer;
