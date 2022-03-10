import * as React from 'react';

import {Box, Modal, Typography, Container, TextField, Button} from '@mui/material';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from 'react'

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function FloatingFab(props){
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = event => {
        console.log("handle open")
        console.log(event)
        setOpen(true);
    }


    return (
      <Box>
        <Fab onClick={handleOpen} style={style} size="medium" color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            
            <Container>
              <TextField fullWidth id="outlined-basic" label="Switch Name" variant="outlined" />
              <Button variant="contained">Create Device</Button>

            </Container>
            
          </Box>
        </Modal>
      </Box>
    );
}

export default FloatingFab;