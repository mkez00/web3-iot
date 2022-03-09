import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import FloatingFab from './FloatingFab'
import DeviceManagement from './DeviceManagement';
import Header from './Header';

function App() {
  return (
    <Box>
      <Header></Header>
      <Container>
        <Box sx={{ mt: 2 }}>
          <DeviceManagement></DeviceManagement>
        </Box>
      </Container>
      <FloatingFab></FloatingFab>
    </Box>
  );
}

export default App;
