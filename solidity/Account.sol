// SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Account is Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _deviceIds;

    enum DeviceType{ SWITCH }

    struct Device {
        DeviceType deviceType;
        string deviceName;
        bool switchState;
        bool enabled; //is the device enabled
    }

    mapping(uint256 => Device) Devices;

    constructor(address _accountRegisterContractAddress) {
        IAccountRegister(_accountRegisterContractAddress).linkContract(msg.sender, address(this));
    }

    function getDevice(uint256 _deviceId) public view onlyOwner returns (Device memory){
        return Devices[_deviceId];
    }

    function switchDeviceState(uint256 _deviceId) external onlyOwner {
        Devices[_deviceId].switchState = !Devices[_deviceId].switchState;
    }

    function deleteDevice(uint256 _deviceId) external onlyOwner {
        Devices[_deviceId].enabled = false;
    }

    function getCurrentDeviceId() public view onlyOwner returns (uint256){
        return _deviceIds.current();
    }

    function createDevice(DeviceType _deviceType, string memory _deviceName) external onlyOwner returns (uint256) {
        _deviceIds.increment();
        uint256 deviceId = _deviceIds.current();

        Devices[deviceId] = Device(_deviceType, _deviceName, true, true);

        return deviceId;
    }
}

interface IAccountRegister {
    function linkContract(address _owner, address _contractAddress) external;
}