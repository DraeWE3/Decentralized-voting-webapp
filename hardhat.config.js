require('dotenv').config(); // Load .env variables
require("@nomiclabs/hardhat-ethers");

module.exports = {
    solidity: "0.8.19",
    networks: {
        sepolia: {
            url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`, // Fetch from .env
            accounts: [process.env.PRIVATE_KEY] // Fetch private key from .env
        },
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY, // Fetch Etherscan API key from .env
    },
};
