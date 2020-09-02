import {
  GET_MORE_INFO,
  DESTRUCT_ELEMENT,
  CONVERT_TO_ARRAY,
} from './more-info.types';

// find the element for the more info componet
export const getMoreInfo = (prices, id) => {
  let element = prices.find((el) => el.CoinInfo.Id === id);

  return {
    type: GET_MORE_INFO,
    payload: element,
  };
};

// destructuring element's properties
export const destructor = (element) => {
  const { DISPLAY } = element;

  let x = DISPLAY[Object.keys(DISPLAY)[0]];

  return {
    type: DESTRUCT_ELEMENT,
    payload: x,
  };
};

// convert to array so the map function can be used in the dom
export const convert = (newEl) => {
  let array = Object.entries(newEl);

  return {
    type: CONVERT_TO_ARRAY,
    payload: array,
  };
};
