import { toLogin } from '@services';
import { loginFailure, loginSuccess } from '../reducers/login';

export function login () {
  return dispatch => toLogin().then(data => {
    let { username, msg } = data;
    if (username) {
      dispatch(loginSuccess(username));
    } else {
      dispatch(loginFailure(msg));
    }
  });
}
