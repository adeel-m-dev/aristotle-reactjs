import React from 'react';

import loadable from 'utils/loadable';

const LoginPage = loadable(() => import('./NonMember/LoginPage'));
const ForgotPasswordPage = loadable(() => import('./NonMember/ForgotPasswordPage'));
const ResetPasswordPage = loadable(() => import('./NonMember/ResetPasswordPage'));
const DashboardPage = loadable(() => import('./Dashboard'));
const RegisterPage = loadable(() => import('./NonMember/RegisterPage'));

const routes = [
  {
    path: '/',
    component: DashboardPage,
  },

];

export default routes;

export const loginRoute = [
  {
    path: '/register',
    component: RegisterPage,
  },
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/forgot-password',
    component: ForgotPasswordPage,
  },
  {
    path: '/reset-password',
    component: ResetPasswordPage,
  },
];
