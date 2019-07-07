import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';
axios.defaults.withCredentials = true;
axios.defaults.timeout = 100000;
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';

axios.interceptors.request.use(config => {
  config.setHeaders([]);
  return config;
}, e => {
  console.info('exception error request');
  return { e };
});

// response all request
let fullRequest = axios.create();

fullRequest.interceptors.response.use(res => {
  return res;
}, (e) => {
  console.info('exception error response');
  return { e };
});

// response success request with data
let defaultRequest = axios.create();

defaultRequest.interceptors.response.use(res => {
  return res.data || {};
}, (e) => {
  console.info('exception error response');
  return { e };
});

export {
  fullRequest,
  defaultRequest
};
