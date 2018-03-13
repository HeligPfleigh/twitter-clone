import { combineReducers } from 'redux';

import nav from './navigationReducer';

export default client => combineReducers({
  apollo: client.reducer(),
  nav,
});