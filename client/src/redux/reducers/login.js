import { LOGIN_FAILURE, LOGIN_SUCCESS } from '../actionTypes/login';

const initialState = {
  email: '',
  error: ''
};

export function loginSuccess (email) {
  return { type: LOGIN_SUCCESS, email };
}

export function loginFailure (error) {
  return { type: LOGIN_FAILURE, error };
}

const handlers = {
  [LOGIN_SUCCESS]: (state, action) =>
    Object.assign({}, state, {
      ...action
    }),

  [LOGIN_FAILURE]: (state, action) =>
    Object.assign({}, state, {
      ...action
    })
};

export default function login (state, action) {
  state = state || initialState;
  let handler = handlers[action.type];
  if (!handler) return state;
  return handler(state, action);
}
