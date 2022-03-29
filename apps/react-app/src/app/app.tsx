import styled from 'styled-components';
import { MemoryRouter, Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import { addHistory, clearHistory, HistoryKey, rootStore, startAppListening } from '@react-workspace/placeholder-lib';

import ROUTES from './routes/routes';
import { isAnyOf } from '@reduxjs/toolkit';
import LocalStorageUtil from './utils/localStorage';
import FloatingHistory from './components/FloatingHistory';

const StyledApp = styled.div`
  // Your style here
  position: relative;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
`;

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

export function App() {
  return (
      <StyledApp>
        <Provider store={rootStore}>
          <MemoryRouter>
            <Routes>
              {
                ROUTES.map(r => <Route key={r.path} {...r} />)
              }
            </Routes>
          </MemoryRouter>
          <FloatingHistory />
        </Provider>
      </StyledApp>
  );
}

export default App;
