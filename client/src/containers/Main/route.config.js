import { lazy } from 'react';

const config = [
  {
    path: '/',
    exact: true,
    component: lazy(
      () => import(/* webpackChunkName:"dashboard" */ '@containers/Dashboard')),
    title: 'Dashboard'
  },

  {
    path: '/dashboard',
    exact: true,
    component: lazy(
      () => import(/* webpackChunkName:"dashboard" */ '@containers/Dashboard')),
    title: 'Dashboard'
  },
  {
    path: '/products',
    component: lazy(
      () => import(/* webpackChunkName:"products" */ '@containers/Products')),
    title: 'Products'
  },
  {
    path: '*',
    isRedirect: true,
    to: '/'
  }
];
export default config;
