import styled from 'styled-components';
import { MemoryRouter, Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import { rootStore } from '@react-workspace/placeholder-lib';

import ROUTES from './routes/routes';

const StyledApp = styled.div`
  // Your style here
`;

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
        </Provider>
      </StyledApp>
  );
}

export default App;
