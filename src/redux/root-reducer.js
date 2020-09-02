import { combineReducers } from 'redux';

import cryptoReducer from './crypto/crypto.reducer';
import moreInfoReducer from './more-info/more-info.reducer';

export default combineReducers({
  crypto: cryptoReducer,
  moreInfo: moreInfoReducer,
});
