const Box = artifacts.require("Box");
const Basic = artifacts.require("Basic");
const HelloWorld = artifacts.require("HelloWorld");
// const RoleToken = artifacts.require("RoleToken");

module.exports = function(deployer) {
    console.log("--------------Deploy 2nd step-------------------- \n");
    deployer.deploy(Box);
    deployer.deploy(Basic);
    deployer.deploy(HelloWorld, "Hello World message");
};