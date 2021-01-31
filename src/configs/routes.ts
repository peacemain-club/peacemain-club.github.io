import React from 'react';

import Main from 'pages/main';
import Apply from 'pages/apply';
import Policy from 'pages/policy';
import _404 from 'pages/404';

export const MAIN = '/';
export const APPLY = '/apply';
export const POLICY = '/policy';

interface RouteProps {
  component: React.FC,
  path?: string,
  exact?: boolean,
}

const routes: Array<RouteProps> = [
  {component: Main, path: MAIN, exact: true},
  {component: Apply, path: APPLY, exact: true},
  {component: Policy, path: POLICY, exact: true},
  {component: _404},
];

export default routes;
