/* eslint-disable jsx-a11y/accessible-emoji */
import { addHistory, clearHistory, HistoryKey, rootStore, startAppListening } from '@react-workspace/placeholder-lib';
import { isAnyOf } from '@reduxjs/toolkit';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { Provider } from 'react-redux';

import { MemoryRouter, Route, Routes } from 'react-router';
import FloatingHistory from './components/FloatingHistory';
import ROUTES from './routes/routes';
import LocalStorageUtil from './utils/localStorage';


startAppListening({
  matcher: isAnyOf(addHistory, clearHistory),
  effect: (action, api) => {
    const state = api.getState();
    switch (action.type) {
      case addHistory.type:
        LocalStorageUtil.SaveValue(HistoryKey, state.history.ids.join(','));
        break;
      case clearHistory.type:
        LocalStorageUtil.RemoveValue(HistoryKey);
        break;
    }
  },
})


const App = () => {

  return (
    <>
      <StatusBar barStyle="default" />
      <Provider store={rootStore}>
        <SafeAreaView style={styles.container}>
          <MemoryRouter>
            <Routes>
              {
                ROUTES.map(route => <Route key={route.path} {...route}/>)
              }
            </Routes>
          </MemoryRouter>
          <FloatingHistory />
        </SafeAreaView>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  }
})

export default App;
