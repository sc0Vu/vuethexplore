const config = {};

config.hosts = {
  main: {
    test: false,
    rpcUri: 'https://mainnet.infura.io/v3/2175b5624f22491ea751adfaac5148a6',
    chainId: 1,
  },
  goerli: {
    test: false,
    rpcUri: 'https://goerli.infura.io/v3/2175b5624f22491ea751adfaac5148a6',
    chainId: 5,
  },
  sepolia: {
    test: true,
    rpcUri: 'https://sepolia.infura.io/v3/2175b5624f22491ea751adfaac5148a6',
    chainId: 11155111,
  },
};

config.limitLowerBound = 10;
config.limitUpperBound = 200;
config.hostStorageKey = 'vuethexplore-host';
config.blockFromStorageKey = 'vuethexplore-from';
config.blockToStorageKey = 'vuethexplore-to';
config.blockLimitStorageKey = 'vuethexplore-limit';

module.exports = config;
