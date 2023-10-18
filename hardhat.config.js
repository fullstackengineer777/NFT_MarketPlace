require("@nomicfoundation/hardhat-toolbox");

const fs = require("fs");
require('dotenv').config();

// const privateKey = fs.readFileSync(".secret").toString();
// const projectId = fs.readFileSync(".projectId").toString();
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  networks: {
    defaultNetwork: "hardhat",
    hardhat: {
      chainId: 1337,
    },
    sepolia: {
      url: process.env.SEPOLIA_TESTNET_URL,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY1]
    },
    paths: {
      artifacts: './frontend/src/artifacts'
    }
    // rinkeby: {
    //   url: `https://rinkeby.infura.io/v3/${projectId}`,
    //   accounts: [privateKey],
    // },
  },
  allowUnlimitedContractSize: true, 
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      }
    }
  }
};
