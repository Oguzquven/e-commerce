// src/store/actions/addressActions.js
import axios from "axios";

// Action Types
export const SET_ADDRESSES = "SET_ADDRESSES";
export const ADD_ADDRESS = "ADD_ADDRESS";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const DELETE_ADDRESS = "DELETE_ADDRESS";
export const SET_ADDRESS_LOADING = "SET_ADDRESS_LOADING";
export const SET_ADDRESS_ERROR = "SET_ADDRESS_ERROR";

const API_URL = "https://workintech-fe-ecommerce.onrender.com";

// GET - Kayıtlı adresleri getir
export const fetchAddresses = () => async (dispatch, getState) => {
  dispatch({ type: SET_ADDRESS_LOADING, payload: true });

  try {
    const token = getState().client.user.token;
    console.log("Fetching with token:", token); // DEBUG

    const response = await axios.get(`${API_URL}/user/address`, {
      headers: {
        Authorization: token, // Bearer kaldırıldı
      },
    });

    dispatch({ type: SET_ADDRESSES, payload: response.data });
  } catch (error) {
    console.error("Fetch error:", error.response?.status, error.response?.data); // DEBUG
    dispatch({ type: SET_ADDRESS_ERROR, payload: error.message });
  } finally {
    dispatch({ type: SET_ADDRESS_LOADING, payload: false });
  }
};

// POST - Yeni adres ekle
export const createAddress = (addressData) => async (dispatch, getState) => {
  try {
    const token = getState().client.user.token;
    const response = await axios.post(`${API_URL}/user/address`, addressData, {
      headers: {
        Authorization: token,
      },
    });

    console.log("Create success:", response.data);

    // Yeni adresi state'e ekle
    dispatch({ type: ADD_ADDRESS, payload: response.data });

    // Listeyi yenile - önemli!
    dispatch(fetchAddresses());

    return true;
  } catch (error) {
    console.error(
      "Create error:",
      error.response?.status,
      error.response?.data,
    );
    dispatch({ type: SET_ADDRESS_ERROR, payload: error.message });
    return false;
  }
};

// PUT - Adres güncelle
export const editAddress = (id, addressData) => async (dispatch, getState) => {
  try {
    const token = getState().client.user.token;
    const response = await axios.put(
      `${API_URL}/user/address`,
      { ...addressData, id },
      {
        headers: {
          Authorization: token, // Bearer kaldırıldı
        },
      },
    );

    dispatch({ type: UPDATE_ADDRESS, payload: response.data });
    return true;
  } catch (error) {
    dispatch({ type: SET_ADDRESS_ERROR, payload: error.message });
    return false;
  }
};

// DELETE - Adres sil
export const removeAddress = (id) => async (dispatch, getState) => {
  try {
    const token = getState().client.user.token;
    await axios.delete(`${API_URL}/user/address/${id}`, {
      headers: {
        Authorization: token, // Bearer kaldırıldı
      },
    });

    dispatch({ type: DELETE_ADDRESS, payload: id });
    return true;
  } catch (error) {
    dispatch({ type: SET_ADDRESS_ERROR, payload: error.message });
    return false;
  }
};
