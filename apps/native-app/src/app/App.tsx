/* eslint-disable jsx-a11y/accessible-emoji */
import { rootStore } from '@react-workspace/placeholder-lib';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';

import { MemoryRouter, Route, Routes } from 'react-router';
import ROUTES from './routes/routes';

const App = () => {

  return (
    <>
      <StatusBar barStyle="default" />
      <Provider store={rootStore}>
        <SafeAreaView>
          <MemoryRouter>
            <Routes>
              {
                ROUTES.map(route => <Route key={route.path} {...route}/>)
              }
            </Routes>
          </MemoryRouter>
        </SafeAreaView>
      </Provider>
    </>
  );
};

export default App;
