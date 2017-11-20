const config = {};

config.hosts = {
  main: {
    test: false,
    rpcUri: 'https://mainnet.infura.io/vuethexplore',
    chainId: 1,
  },
  ropsten: {
    test: true,
    rpcUri: 'https://ropsten.infura.io/vuethexplore',
    chainId: 3,
  },
  kovan: {
    test: true,
    rpcUri: 'https://kovan.infura.io/vuethexplore',
    chainId: 42,
  },
  rinkeby: {
    test: true,
    rpcUri: 'https://rinkeby.infura.io/vuethexplore',
    chainId: 4,
  },
  infura: {
    test: true,
    rpcUri: 'https://infuranet.infura.io/vuethexplore',
    chainId: 999,
  },
};

config.limitLowerBound = 10;
config.limitUpperBound = 200;

module.exports = config;
