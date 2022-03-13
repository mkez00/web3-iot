# Overview

IoT Manager is a a multi-tenant blockchain (EVM) enabled application that has a web3 front end designed to manage the state of IoT devices (currently only switches).  The state of the devices is to be maintained via smart contracts on a Ethereum based blockchain.  The "production" version of this application found here (link) uses the Polygon Mainnet to manage accounts.

# Product Architecture

![Project Architecture](/iot-manager-architecture.png)

The application backend is powered by solidity smart contracts.  When a new account connects to the frontend, the initialized smart contract is stored in an account register maintained by the site creator (me).  This allows for the user to connect to their web3 enabled browser and return to IoT Manager without having to create a new account each time.

# Why Blockchain?

Home automation services typically offer one time purchases of hardware that requires the use of an app that are usually free.  Avoiding monthly fees for these products is lucrative for the consumer but does not benefit the company that incurs monthly fees on infrastructure required to act as a bridge between the device and app.  If the company ceases to exist, these services get terminated, and the customers are stuck with hardware that cannot be interacted remotely with an app.  Providing a backend that is hosted in a decentralized system that supports smart contracts eliminates this from happening.
