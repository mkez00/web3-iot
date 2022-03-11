# Overview

IoT Manager is a a multi-tenant blockchain (EVM) enabled application that has a web3 front end designed to manage the state of IoT devices (currently only switches).  The state of the devices is to be maintained via smart contracts on a Ethereum based blockchain.  The "production" version of this application found here (link) uses the Polygon Mainnet to manage accounts.

# Product Architecture

![Project Architecture](/iot-manager-architecture.png)

The application backend is powered by solidity smart contracts.  When a new account connects to the frontend, the initialized smart contract is stored in an account register maintained by the site creator (me).  This allows for the user to connect to their web3 enabled browser and return to IoT Manager without having to create a new account each time.
