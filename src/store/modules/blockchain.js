const Web3 = require('web3');

// initial state
const state = {
  web3: {},
  host: '',
  blockNumber: 0,
};

// getters
const getters = {
  connected ({ web3 }) {
    if (web3.currentProvider === undefined) {
      return false;
    }
    return web3.currentProvider.connected;
  },
  version ({ web3 }) {
    return web3.version || Web3.version;
  },
};

// actions
const actions = {
  setHost ({ commit }, host) {
    commit('setHost', host);
  },
  setBlockNumber ({ commit }, blockNumber) {
    commit('setBlockNumber', blockNumber);
  },
};

// mutations
const mutations = {
  setHost ({ web3, host }, newHost) {
    if (host === newHost) {
      return;
    }
    state.host = newHost;

    if (web3.eth === undefined) {
      state.web3 = new Web3();
    }
    state.web3.setProvider(new Web3.providers.HttpProvider(newHost));
  },
  setBlockNumber ({ blockNumber }, newBlockNumber) {
    state.blockNumber = newBlockNumber;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
