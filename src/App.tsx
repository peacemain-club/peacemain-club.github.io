import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import firebase from 'firebase/app';
import 'firebase/auth';

import GlobalStyle from 'configs/style';
import routes from 'configs/routes';
import {theme} from 'configs/style';

function RouterManager(): React.ReactElement {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
      }
    });
  });

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        {
          routes.map((route, i) => {
            const {component, path, exact} = route;
            return (
              <Route
                key={String(i)}
                path={path}
                component={component}
                exact={exact}
              />
            );
          })
        }
      </Switch>
    </Router>
  );
}

function App(): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterManager />
    </ThemeProvider>
  );
}

export default App;
