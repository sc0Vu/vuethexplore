import store from '@/store';
import blockchain from '@/store/modules/blockchain';

describe('State blockchain', () => {
  const host = 'https://infuranet.infura.io/v3/2175b5624f22491ea751adfaac5148a6';
  const blockNumber = 1;

  it('should set host and connected', () => {
    expect(store.getters.connected).to.equal(false);
    blockchain.mutations.setHost(store.state.blockchain, host);

    expect(store.state.blockchain.host).to.equal(host);
    expect(store.getters.connected).to.equal(true);
  });

  it('should has version', () => {
    expect(store.getters.version.length > 0).to.equal(true);
  });

  it('should has isBeta', () => {
    const version = store.getters.version;

    expect(store.getters.isBeta).to.equal(version.indexOf('beta') >= 0);
  });

  it('should disconnected', () => {
    // disconnect
    blockchain.mutations.disconnect(store.state.blockchain);
    expect(store.getters.connected).to.equal(false);
    expect(store.state.blockchain.web3).to.deep.equal({});
    expect(store.state.blockchain.host).to.equal(null);
    expect(store.state.blockchain.blockNumber).to.equal(0);
  });

  it('should set block number', () => {
    blockchain.mutations.setBlockNumber(store.state.blockchain, blockNumber);

    expect(store.state.blockchain.blockNumber).to.equal(blockNumber);
  });
});
