import { WheelData } from "react-custom-roulette/dist/components/Wheel/types";

declare global {
    interface Window {
      ethereum: any;
    }
}

export const bigNumDivisor = 10**18;

export const minimumSpinCost = 10000;

export const contractAddress = '0xC56dDA8d8417b1ad28C7D94D7911dCa326Ba301E'; // 0x6cF4cb50b7A729508d4Df74676d1c447eC1Add2

export const contractAbi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "payoutAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "BackupBalancePayout",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "depositor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Deposit",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "depositBackup",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "depositJackpot",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "flusher",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Flush",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "flushBackupBalance",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "payoutToOrigin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newValue",
				"type": "uint256"
			}
		],
		"name": "setLatestWinningNumber",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "spin",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "depositor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Spin",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "depositor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Withdraw",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "backupBalance",
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
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balanceOf",
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
		"inputs": [],
		"name": "getBackupBalance",
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
		"inputs": [],
		"name": "getBalanceOf",
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
		"inputs": [],
		"name": "getJackpot",
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
		"inputs": [],
		"name": "getLatestWinningNumber",
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
		"inputs": [],
		"name": "jackpot",
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
		"inputs": [],
		"name": "minimumToSpin",
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
		"inputs": [],
		"name": "originAddress",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "symbols",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

export const segments: WheelData[] = [
    { option: '100', style: { backgroundColor: '#ff0000' } },
    { option: '100', style: { backgroundColor: '#ff0020' } },
    { option: '1000', style: { backgroundColor: '#ff0040' } },
    { option: '20000', style: { backgroundColor: '#ff0064' } },
    { option: '369', style: { backgroundColor: '#ff006c' } },
    { option: '250', style: { backgroundColor: '#ff00a0' } },
    { option: '2000', style: { backgroundColor: '#ff00ac' } },
    { option: '5555', style: { backgroundColor: '#ff00d7' } },
    { option: '10000', style: { backgroundColor: '#ff00fa' } },
    { option: '50000', style: { backgroundColor: '#fc00ff' } },
    { option: '200', style: { backgroundColor: '#c800ff' } },
    { option: '1000', style: { backgroundColor: '#b700ff' } },
    { option: '2000', style: { backgroundColor: '#8800ff' } },
    { option: '500', style: { backgroundColor: '#5500ff' } },
    { option: '777', style: { backgroundColor: '#5900ff' } },
    { option: '3000', style: { backgroundColor: '#6200ff' } },
    { option: '5555', style: { backgroundColor: '#1400ff' } },
    { option: '100', style: { backgroundColor: '#001fff' } },
    { option: '500', style: { backgroundColor: '#002cff' } },
    { option: '100', style: { backgroundColor: '#004aff' } },
    { option: '8000', style: { backgroundColor: '#007dff' } },
    { option: '1000', style: { backgroundColor: '#00b1ff' } },
    { option: '10000', style: { backgroundColor: '#00caff' } },
    { option: '2000', style: { backgroundColor: '#00ffff' } },
  ]