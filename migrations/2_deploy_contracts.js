var PersonalProject = artifacts.require("./PersonalProject.sol");
var SimpleStorage = artifacts.require("./SimpleStorage.sol");

module.exports = function(deployer) {
  deployer.deploy(PersonalProject);
  deployer.deploy(PersonalProject);
};
