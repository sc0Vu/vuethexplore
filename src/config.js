const config = {};

config.hosts = {
  main: {
    test: false,
    rpcUri: 'https://mainnet.infura.io/v3/2175b5624f22491ea751adfaac5148a6',
    chainId: 1,
  },
  ropsten: {
    test: true,
    rpcUri: 'https://ropsten.infura.io/v3/2175b5624f22491ea751adfaac5148a6',
    chainId: 3,
  },
  kovan: {
    test: true,
    rpcUri: 'https://kovan.infura.io/v3/2175b5624f22491ea751adfaac5148a6',
    chainId: 42,
  },
  rinkeby: {
    test: true,
    rpcUri: 'https://rinkeby.infura.io/v3/2175b5624f22491ea751adfaac5148a6',
    chainId: 4,
  },
  infura: {
    test: true,
    rpcUri: 'https://infuranet.infura.io/v3/2175b5624f22491ea751adfaac5148a6',
    chainId: 999,
  },
};

config.limitLowerBound = 10;
config.limitUpperBound = 200;
config.hostStorageKey = 'vuethexplore-host';
config.blockFromStorageKey = 'vuethexplore-from';
config.blockToStorageKey = 'vuethexplore-to';
config.blockLimitStorageKey = 'vuethexplore-limit';

module.exports = config;
