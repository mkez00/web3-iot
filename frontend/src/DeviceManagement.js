import * as React from 'react';

import { useState, useEffect } from 'react'

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import FloatingFab from "./FloatingFab"

import Web3 from 'web3'

function createData(id, name, switchState, enabled) {
    return { id, name, switchState, enabled };
  }

function DeviceManagement(){
    const [account, setAccount] = useState();
    const [accountContractId, setAccountContractId] = useState();
    const [devices, setDevices] = useState();
    const [loadingData, setLoadingData] = useState(true);
    const [web3Client, setWeb3Client] = useState();
    const accountAbi = require('./account-abi.json')

    const handleSwitchState = event => {
        processSwitchState(event)
    }

    async function processSwitchState(event){
        let accountContract = new web3Client.eth.Contract(accountAbi, accountContractId, { from: account })
        var response = await accountContract.methods.switchDeviceState(event.target.id).send();
        loadDataGrid(web3Client, accountContractId, account);
    }

    async function loadDataGrid(web3, accountContractId, account){
        setLoadingData(true)
        // account contract
        let accountContract = new web3.eth.Contract(accountAbi, accountContractId, { from: account })
        const deviceCount = await accountContract.methods.getCurrentDeviceId().call();
        const rows = []
        for (var x=1; x<=deviceCount; x++){
            let device = await accountContract.methods.getDevice(x).call();
            rows.push(createData(x, device.deviceName, device.switchState, device.enabled))
        }
        setDevices(rows)
        setLoadingData(false)
    }

    useEffect(() => {
        async function load() {
          const web3 = new Web3(window.ethereum);
          setWeb3Client(web3)

          const accounts = await web3.eth.requestAccounts();
          setAccount(accounts[0]);
      
          const accountRegisterAbi = require('./accountregister-abi.json')
          const contractId = require('./accountregister-contractid.json')

          // account register
          let accountRegisterContract = new web3.eth.Contract(accountRegisterAbi, contractId.contractId, { from: account })
          const _accountContractId = await accountRegisterContract.methods.getContractId().call();
          setAccountContractId(_accountContractId)
          loadDataGrid(web3, _accountContractId, accounts[0]);
        }
        
        load();
      }, []);

    if (devices!=undefined && devices.filter(row => row.enabled).length == 0){
        return (
            <Typography align="center">No devices, press + to start</Typography>
        )
    }

    return (
        <Box>
        <Typography variant="caption">Account: {account}</Typography> | <Typography variant="caption" >Contract ID: {accountContractId}</Typography>
        {loadingData ? (<div>Loading...</div>): (
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
                {devices.filter(row => row.enabled).map((row) => (
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
                        <Switch id={String(row.id)} checked={row.switchState} onChange={handleSwitchState}></Switch>
                    </TableCell>
                    <TableCell align="right">
                        <Button size="small">Delete</Button>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        )}

            <FloatingFab web3Client={web3Client} account={account} accountContractId={accountContractId} accountAbi={accountAbi}></FloatingFab>
        </Box>
    );
}

export default DeviceManagement;