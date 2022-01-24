require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/UMVlZYFsZNTboWJ1LPvj0xlDHfrQ-GM5",
      accounts: [
        "5cf004c82b36a0eb92905b785bd5ea0c0393be1b054ca79e955272801a72d7df",
      ],
    },
  },
};
