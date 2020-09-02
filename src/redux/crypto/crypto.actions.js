import {
  SET_LOADING,
  GET_CRYPTO_PRICES,
  ERROR,
  SET_CURRENCY,
} from './crypto.types';
import axios from 'axios';

// api key is store in the .env.local file in the route
const API_KEY = `${process.env.REACT_APP_API_KEY}`;

// set loading for spinner component
export const setLoading = (boolean) => ({
  type: SET_LOADING,
  payload: boolean,
});

// fetch crypto prices from the crypto compare api
export const getCryptoPrices = (cur) => async (dispatch) => {
  // dispatch({
  //   type: SET_LOADING,
  //   payload: true,
  // });

  try {
    const res = await axios.get(
      `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=${cur}&api_key=${API_KEY}`
    );

    dispatch({
      type: GET_CRYPTO_PRICES,
      payload: res.data.Data,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err,
    });
  }
};

// the user should be able to select their preferred local currency
export const setCurrency = (cur) => ({
  type: SET_CURRENCY,
  payload: cur,
});

// check cur matches the prices array
export const checkMatch = (cur, prices) => async (dispatch) => {
  let object = prices[0].DISPLAY;

  let keyNames = Object.keys(object);

  if (keyNames[0] === cur.toString()) {
    dispatch({
      type: SET_LOADING,
      payload: false,
    });
  }

  if (keyNames[0] !== cur.toString()) {
    dispatch({
      type: SET_LOADING,
      payload: true,
    });
  }
};
