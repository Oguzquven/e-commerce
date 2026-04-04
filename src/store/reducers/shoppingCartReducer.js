// src/store/reducers/shoppingCartReducer.js
import {
  SET_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_ITEM,
  SET_PAYMENT,
  SET_ADDRESS,
} from "../actions/shoppingCartActions";

// LocalStorage helper fonksiyonları (aynı dosyada)
const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem("shoppingCart");
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    return [];
  }
};

const saveCartToStorage = (cart) => {
  try {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
  } catch (error) {
    console.error("Error saving cart:", error);
  }
};

const initialState = {
  cart: loadCartFromStorage(), // LocalStorage'dan yükle
  payment: {},
  address: {},
};

const shoppingCartReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case SET_CART:
      newState = { ...state, cart: action.payload };
      saveCartToStorage(newState.cart);
      return newState;

    case ADD_TO_CART: {
      const { product, count = 1 } = action.payload;
      const existingItemIndex = state.cart.findIndex(
        (item) => item.product.id === product.id,
      );

      if (existingItemIndex >= 0) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          count: updatedCart[existingItemIndex].count + count,
        };
        newState = { ...state, cart: updatedCart };
      } else {
        newState = {
          ...state,
          cart: [...state.cart, { count, checked: true, product }],
        };
      }
      saveCartToStorage(newState.cart);
      return newState;
    }

    case REMOVE_FROM_CART:
      newState = {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };
      saveCartToStorage(newState.cart);
      return newState;

    case UPDATE_CART_ITEM: {
      const { productId, count } = action.payload;
      if (count <= 0) {
        newState = {
          ...state,
          cart: state.cart.filter((item) => item.product.id !== productId),
        };
      } else {
        newState = {
          ...state,
          cart: state.cart.map((item) =>
            item.product.id === productId ? { ...item, count } : item,
          ),
        };
      }
      saveCartToStorage(newState.cart);
      return newState;
    }

    case SET_PAYMENT:
      return { ...state, payment: action.payload };

    case SET_ADDRESS:
      return { ...state, address: action.payload };

    default:
      return state;
  }
};

export default shoppingCartReducer;
