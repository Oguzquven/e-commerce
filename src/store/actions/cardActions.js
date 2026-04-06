// src/store/actions/cardActions.js
import axios from "axios";

export const SET_CARDS = "SET_CARDS";
export const ADD_CARD = "ADD_CARD";
export const UPDATE_CARD = "UPDATE_CARD";
export const DELETE_CARD = "DELETE_CARD";
export const SET_CARD_LOADING = "SET_CARD_LOADING";
export const SET_CARD_ERROR = "SET_CARD_ERROR";

// ✅ BOŞLUK YOK
const API_URL = "https://workintech-fe-ecommerce.onrender.com";

export const fetchCards = () => async (dispatch, getState) => {
  dispatch({ type: SET_CARD_LOADING, payload: true });
  try {
    const token = getState().client.user.token;
    const response = await axios.get(`${API_URL}/user/card`, {
      headers: { Authorization: token },
    });
    dispatch({ type: SET_CARDS, payload: response.data });
  } catch (error) {
    dispatch({ type: SET_CARD_ERROR, payload: error.message });
  } finally {
    dispatch({ type: SET_CARD_LOADING, payload: false });
  }
};

export const createCard = (cardData) => async (dispatch, getState) => {
  try {
    const token = getState().client.user.token;
    const response = await axios.post(`${API_URL}/user/card`, cardData, {
      headers: { Authorization: token },
    });
    dispatch({ type: ADD_CARD, payload: response.data });
    dispatch(fetchCards()); // ✅ Listeyi yenile
    return true;
  } catch (error) {
    dispatch({ type: SET_CARD_ERROR, payload: error.message });
    return false;
  }
};

// ✅ ID BODY'DE GÖNDER (adres gibi)
export const editCard = (id, cardData) => async (dispatch, getState) => {
  try {
    const token = getState().client.user.token;
    const response = await axios.put(
      `${API_URL}/user/card`, // ✅ ID yok, sadece /user/card
      { ...cardData, id }, // ✅ ID body'de gönder
      { headers: { Authorization: token } },
    );

    console.log("Card update response:", response.data);
    dispatch({ type: UPDATE_CARD, payload: response.data });
    dispatch(fetchCards()); // ✅ Listeyi yenile (anlık yansıma için)

    return true;
  } catch (error) {
    console.error(
      "Card update error:",
      error.response?.status,
      error.response?.data,
    );
    alert(
      "Güncelleme hatası: " + (error.response?.data?.message || error.message),
    );
    return false;
  }
};

export const removeCard = (id) => async (dispatch, getState) => {
  try {
    const token = getState().client.user.token;
    await axios.delete(`${API_URL}/user/card/${id}`, {
      headers: { Authorization: token },
    });
    dispatch({ type: DELETE_CARD, payload: id });
    dispatch(fetchCards()); // ✅ Listeyi yenile
    return true;
  } catch (error) {
    dispatch({ type: SET_CARD_ERROR, payload: error.message });
    return false;
  }
};
