const Web3 = require('web3');

// const MyContract
const web3 = new Web3("http://127.0.0.1:8545");

console.log("Executing web3");

web3.eth.getAccounts().then(accounts => console.log(accounts));

// const contract = new web3.eth.Contract(
//     abi,
//     address,
// ) 