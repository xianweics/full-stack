import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import login from './login';
import action from './action';

export default (history) => combineReducers({
  router: connectRouter(history),
  login,
  action
});
