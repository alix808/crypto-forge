import {
  GET_MORE_INFO,
  DESTRUCT_ELEMENT,
  CONVERT_TO_ARRAY,
} from './more-info.types';

const INITIAL_STATE = {
  element: null,
  newEl: null,
  array: null,
};

const moreInfoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MORE_INFO:
      return {
        ...state,
        element: action.payload,
      };

    case DESTRUCT_ELEMENT:
      return {
        ...state,
        newEl: action.payload,
      };

    case CONVERT_TO_ARRAY:
      return {
        ...state,
        array: action.payload,
      };

    default:
      return state;
  }
};

export default moreInfoReducer;
