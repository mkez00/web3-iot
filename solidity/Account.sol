// SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Account is Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _deviceIds;

    struct Device {
        string deviceName;
    }

    mapping(uint256 => Device) Devices;

    constructor() {}

    function getDevice(uint256 _deviceId) public view onlyOwner returns (Device memory){
        return Devices[_deviceId];
    }

    function createDevice(string memory _deviceName) external onlyOwner returns (uint256) {
        _deviceIds.increment();
        uint256 deviceId = _deviceIds.current();

        Devices[deviceId] = Device(_deviceName);

        return deviceId;
    }
}
