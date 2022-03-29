import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import { ShareLibrary } from '@react-workspace/placeholder-lib';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="react-app" />
      <h1>{ShareLibrary}</h1>
    </StyledApp>
  );
}

export default App;
