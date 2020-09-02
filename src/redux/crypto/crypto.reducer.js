import {
  SET_LOADING,
  GET_CRYPTO_PRICES,
  ERROR,
  SET_CURRENCY,
} from './crypto.types';

const INITIAL_STATE = {
  loading: true,
  prices: null,
  error: null,
  cur: 'USD',
};

const cryptoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case GET_CRYPTO_PRICES:
      return {
        ...state,
        prices: action.payload,
      };

    case ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case SET_CURRENCY:
      return {
        ...state,
        loading: true,
        cur: action.payload,
      };

    default:
      return state;
  }
};

export default cryptoReducer;
