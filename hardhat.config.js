require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks : {
    swisstronik : {
      url:  process.env.ALCHEMY_RPC_API_KEY,
      accounts : [process.env.PRIVATE_KEY]
    }
  }
};
