import { defaultRequest } from './request';
import * as apiPath from './api';

export const toLogin = () => {
  return defaultRequest.post(apiPath.LOGIN);
};
