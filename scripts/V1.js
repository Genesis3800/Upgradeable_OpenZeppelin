// scripts/deploy_upgradeable_v1contract.js
const { ethers, upgrades } = require("hardhat");

async function main() {
    const V1contract = await ethers.getContractFactory("V1");
    console.log("Deploying V1contract...");
    const v1contract = await upgrades.deployProxy(V1contract, [10], {
        initializer: "initialvalue",
    });
    await v1contract.deployed();
    console.log("V1contract deployed to:", v1contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });