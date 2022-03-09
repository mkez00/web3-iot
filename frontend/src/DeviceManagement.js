import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

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

function DeviceManagement(){
    return (
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
    );
}

export default DeviceManagement;