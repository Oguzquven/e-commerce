// src/store/actions/shoppingCartActions.js

// Action Types
export const SET_CART = "SET_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";

// Action Creators

// Sepeti direkt set et (API'den çekince vs.)
export const setCart = (cart) => ({
  type: SET_CART,
  payload: cart,
});

// Ürün ekle - Aynı ürün varsa count artar
export const addToCart = (product, count = 1) => ({
  type: ADD_TO_CART,
  payload: { product, count },
});

// Ürün çıkar
export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

// Ürün miktarını güncelle
export const updateCartItem = (productId, count) => ({
  type: UPDATE_CART_ITEM,
  payload: { productId, count },
});

// Ödeme bilgisi
export const setPayment = (payment) => ({
  type: SET_PAYMENT,
  payload: payment,
});

// Adres bilgisi
export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: address,
});
