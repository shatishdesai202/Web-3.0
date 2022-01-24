const hre = require("hardhat");

const main = async () => {
  // generate instance of the contract
  const transactionsFactory = await hre.ethers.getContractFactory(
    "Transaction"
  );
  const transactionsContract = await transactionsFactory.deploy();

  await transactionsContract.deployed();

  console.log("Transactions address: ", transactionsContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
