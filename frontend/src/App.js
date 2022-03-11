import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

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
    </Box>
  );
}

export default App;
