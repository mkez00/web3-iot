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
  const [newDevicename, setNewDeviceName] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
    
    async function createNewDevice(){
        let accountContract = new props.web3Client.eth.Contract(props.accountAbi, props.accountContractId, { from: props.account })
        var response = await accountContract.methods.createDevice(0,newDevicename).send();
        handleClose()
        props.loadDataGrid(props.web3Client, props.accountContractId, props.account)
    }

    return (
      <Box>
        <Fab onClick={handleOpen} style={style} color="primary" aria-label="add">
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
              <TextField fullWidth id="outlined-basic" label="Switch Name" variant="outlined" onChange={(e) => setNewDeviceName(e.target.value)} />
              <Button variant="contained" onClick={createNewDevice}>Create Device</Button>
            </Container>
            
          </Box>
        </Modal>
      </Box>
    );
}

export default FloatingFab;