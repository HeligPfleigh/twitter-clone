import { combineReducers } from 'redux';

import nav from './navigationReducer';
import user from './userReducer';

export default client => combineReducers({
  apollo: client.reducer(),
  nav,
  user,
});