import * as React from 'react';
import './App.css'

import { Typography, Box, Button } from '@mui/material';

function BootstrapAccount(props){
    const accountBytecode = require('./account-bytecode.json')

    async function processNewAccount(){

        let contract = new props.web3Client.eth.Contract(props.accountAbi)
        const contractResult = await contract.deploy({data:accountBytecode.object,arguments:[props.accountRegisterContractId]}).send(
            {
              from: props.account
            }
          )
          props.registerAcount(props.web3Client, props.account)
    }

    return (
        <Box>
          <Typography variant="h4">Welcome to IoT Manager</Typography><br/>
          <Typography variant="body1">
            This application was developed to allow account holders to manage IoT devices (switches) using a web frontend that is blockchain enabled using the Ethereum Virtual Machine. Scripts for the devices can be found in the GitHub repository.
          </Typography><br/>
          <p className="center"><a target="_blank" href="https://github.com/mkez00/web3-iot" rel="noreferrer"><img src='./GitHub-Mark-32px.png' alt="GitHub"></img></a></p>
          <Typography variant="body1">
            Since this application uses an EVM backend, you will need to run it from an Ethereum based wallet such as <a href="https://metamask.io/" target="_blank">Metamask</a>.  The account register (<b>{props.accountRegisterContractId}</b>) that is associated with this service is currently available on <b>Polygon-Mainnet</b>
          </Typography><br/>
          <Button variant="contained" onClick={processNewAccount}>Create Account Now</Button>
        </Box>
    );
}

export default BootstrapAccount;