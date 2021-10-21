const instances = require('../globals/contracts-instances.js')(artifacts);


module.exports = function(deployer) {
    console.log("--------------Deploy 2nd step-------------------- \n");
    deployer.deploy(instances.Box);
    deployer.deploy(instances.Basic);
    deployer.deploy(instances.HelloWorld, "Hello World message");
};