import * as React from 'react';

import Button from '@mui/material/Button';

function BootstrapAccount(props){
    const accountBytecode = require('./account-bytecode.json')

    async function processNewAccount(){

        let contract = new props.web3Client.eth.Contract(props.accountAbi)
        const contractResult = await contract.deploy({data:accountBytecode.object,arguments:[props.accountRegisterContractId]}).send(
            {
              from: props.account
            }
          ).catch(e=>{
            // setProcessingStatus("Contract rejected by client")
            // setProcessingShow(false)
          })
          props.registerAcount(props.web3Client, props.account)
    }

    return (
        <p>Setup account in IoT manager!!!
            <Button onClick={processNewAccount}>Create Account</Button>
        </p>
    );
}

export default BootstrapAccount;