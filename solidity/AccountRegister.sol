// SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

contract AccountRegister {

    mapping(address => address) Registry; //link user account to contract address

    constructor() {}

    function linkContract(address _owner, address _contractAddress) external{
        Registry[_owner] = _contractAddress;
    }

    function getContractId() public view returns (address){
        return Registry[msg.sender];
    }
}