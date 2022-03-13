from web3 import Web3
import asyncio
import configparser
import sys
from datetime import datetime
from playsound import playsound

async def check_status(contract, device_id, file_to_play):
    last_result = False
    while True:
        device = contract.functions.getDevice(int(device_id)).call()	
        switch_state = bool(device[2])
        if last_result != switch_state:
            process_status_change(device[1], switch_state, file_to_play)
            last_result = switch_state
            
        await asyncio.sleep(2)

def process_status_change(switch_name, is_switch_on, file_to_play):
    print(str(datetime.now()) + " processing status for " + switch_name + " changed to " + str(is_switch_on))
    if is_switch_on:
        playsound(file_to_play)

def main():
    config = configparser.RawConfigParser()
    config.read('config.txt')
    config_section = 'Default'
    if len(sys.argv)>=2:
        config_section = sys.argv[1]
    address = config.get(config_section,'account_contract_id')
    device_id = config.get(config_section,'device_id')
    file_to_play = config.get(config_section,'audio_file')

    w3 = Web3(Web3.HTTPProvider(config.get(config_section,'web3_provider')))
    print(w3.isConnected())
    contract = w3.eth.contract(address=address, abi=fetch_abi())

    loop = asyncio.get_event_loop()
    try:
        loop.run_until_complete(asyncio.gather(check_status(contract, device_id, file_to_play)))
    finally:
        loop.close()

def fetch_abi():
    abi = abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_accountRegisterContractAddress",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": False,
		"inputs": [
			{
				"indexed": True,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": True,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "enum Account.DeviceType",
				"name": "_deviceType",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "_deviceName",
				"type": "string"
			}
		],
		"name": "createDevice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_deviceId",
				"type": "uint256"
			}
		],
		"name": "deleteDevice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCurrentDeviceId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_deviceId",
				"type": "uint256"
			}
		],
		"name": "getDevice",
		"outputs": [
			{
				"components": [
					{
						"internalType": "enum Account.DeviceType",
						"name": "deviceType",
						"type": "uint8"
					},
					{
						"internalType": "string",
						"name": "deviceName",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "switchState",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "enabled",
						"type": "bool"
					}
				],
				"internalType": "struct Account.Device",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_deviceId",
				"type": "uint256"
			}
		],
		"name": "switchDeviceState",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
    ]
    return abi

if __name__ == "__main__":
    main()
