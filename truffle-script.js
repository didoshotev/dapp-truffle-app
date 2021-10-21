const Web3 = require('web3');
const web3 = new Web3("http://localhost:8545");

const MetaCoin = artifacts.require("MetaCoin");
const HelloWorld = artifacts.require("HelloWorld");

module.exports = async function(callback) {

    const HelloWorldIntance = await HelloWorld.deployed();

    const accounts = await web3.eth.getAccounts();
    sendCoinViaMetaCoint(accounts[2], accounts[0], 50);

    // console.log(accounts);
    // console.log(await web3.eth.getBlockNumber());
    callback();
}

async function sendCoinViaMetaCoint(from, to, amount) { 

    const MetaCoinInstance = await MetaCoin.deployed(); 
    MetaCoinInstance.sendCoin(to, amount, { from });
    // MetaCoinInstance.sendCoin(accounts[2], 50, {from: accounts[0]});

}