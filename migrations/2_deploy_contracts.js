var PersonalProject = artifacts.require("./PersonalProject.sol");

module.exports = function(deployer) {
  deployer.deploy(PersonalProject);
};
