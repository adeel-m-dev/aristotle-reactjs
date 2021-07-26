/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Master from '../Master';

import GlobalStyle from '../../global-styles';
import routes, { loginRoute } from '../routes';
import MasterNonMember from '../MasterNonMember';
import Register from '../../containers/Register';

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

const AppWrapper = styled.div`
  // // max-width: calc(768px + 16px * 2);
  // margin: 0 auto;s
  // display: flex;
  // min-height: 100%;
  // padding: 0 16px;
  // flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate='%s - Aristotle' defaultTitle='Aristotle'>
        <meta name='description' content='Aristotle - HGI Back Office' />
      </Helmet>
      <Switch>
        {/*Logged in Member routing*/}
        <Route path={'/dashboard'}>
          <Master>
            {
              routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))
            }
          </Master>
        </Route>
        <Route path={'/register'}>
          <Register>
            {
              routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))
            }
          </Register>
        </Route>


        {/*No Logged in Member routing*/}
        <Route path={'/'}>
          <MasterNonMember>
            {
              loginRoute.map(
                (route, i) => (
                  <RouteWithSubRoutes key={i} {...route} />
                ),
              )
            }
          </MasterNonMember>
        </Route>
        {/*No Logged in Member routing*/}
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
