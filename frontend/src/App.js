import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Chip from '@mui/material/Chip';
import Switch from '@mui/material/Switch';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const style = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
};

function createData(id, name, calories, fat, carbs, protein) {
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, 'Front Porch', 159, 6.0, 24, 4.0),
  createData(2, 'Family Room', 237, 9.0, 37, 4.3),
  createData(3, 'Back Porch', 262, 16.0, 24, 6.0),
  createData(4, 'Garage', 305, 3.7, 67, 4.3),
  createData(5, 'Hallway', 356, 16.0, 49, 3.9),
];

function App() {
  return (
   
    <Box>
      <Box>
      <AppBar position="static">
      <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            IoT Manager
      </Typography>

      </Toolbar>
      
        </AppBar>
          
      </Box>
      <Container>
      <Box sx={{ mt: 2 }}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="IoT Devices">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Switch Name</TableCell>
            <TableCell align="right">Switch State</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
              {row.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
             
              <TableCell align="right">
                <Switch></Switch>
              </TableCell>
            
              <TableCell align="right">
                <Button size="small">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Box>
      </Container>
      
      <Fab style={style} size="medium" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
    
    
  );
}

export default App;
