import { lazy } from 'react';

const config = [
  {
    path: '/products',
    exact: true,
    component: lazy(
      () => import(/* webpackChunkName:"products" */ './container/Product1/index')),
    title: 'Product1'
  },
  {
    path: '/products/1',
    exact: true,
    component: lazy(
      () => import(/* webpackChunkName:"products" */ './container/Product1/index')),
    title: 'Product1'
  },

  {
    path: '/products/2',
    exact: true,
    component: lazy(
      () => import(/* webpackChunkName:"products" */ './container/Product2/index')),
    title: 'Product2'
  },
  {
    path: '*',
    isRedirect: true,
    to: '/'
  }
];
export default config;
