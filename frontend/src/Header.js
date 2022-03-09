import * as React from 'react';

import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

function Header(){
    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        IoT Manager
                    </Typography>
                </Toolbar>
            </AppBar> 
        </Box>
    );
}

export default Header;

