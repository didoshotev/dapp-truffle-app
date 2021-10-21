const Web3 = require('web3');
const web3 = new Web3("http://127.0.0.1:8545");

const instances = require('./globals/contracts-instances')(artifacts);

module.exports = async function(callback) {

    const accounts = await web3.eth.getAccounts();
    
    // call whichever contract you want to interact with

    // await sendCoinViaMetaCoint(accounts[2], accounts[0], 50);
    // await helloWorld();
    // console.log(await getBalance(accounts[2]));

    callback();
}

async function helloWorld() { 
    const HelloWorldIntance = await instances.HelloWorld.deployed();
    const call = await HelloWorldIntance.hi();
    console.log('hi CALL:', call);
}

async function sendCoinViaMetaCoint(from, to, amount) { 

    const MetaCoinInstance = await instances.MetaCoin.deployed(); 
    // const gasCost = await MetaCoinInstance.sendCoin.estimateGas(to, amount, { from });

    // MetaCoinInstance.sendCoin(accounts[2], 50, {from: accounts[0]});

    // console.log(gasCost);
    // console.log(MetaCoinInstance.address);
}

async function sendEther(instance, from, to, value) {
    return await instance.sendTransaction({from, to, value});
}

async function getBalance(address) { 
    return await web3.eth.getBalance(address);
}