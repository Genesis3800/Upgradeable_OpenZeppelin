// scripts/upgrade_box.js
const { ethers, upgrades } = require("hardhat");

const PROXY = "0x87E2fa2e862242C1D1aA0662eC8E3fA20132e8ED";

async function main() {
    const V2Contract = await ethers.getContractFactory("V2");
    console.log("Upgrading V1Contract...");
    await upgrades.upgradeProxy(PROXY, V2Contract);
    console.log("V1 upgraded to V2");
}

main();