const Web3 = require('web3');
const { version } = require('web3/package.json');

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
    return web3.version || Web3.version || version;
  },
  isBeta ({ web3 }) {
    const web3Version = web3.version || Web3.version || version;

    return web3Version.indexOf('beta') >= 0;
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
  disconnect ({ commit }) {
    commit('disconnect');
  },
};

// mutations
const mutations = {
  setHost ({ web3, host }, newHost) {
    if (host === newHost) {
      return;
    }
    const provider = new Web3.providers.HttpProvider(newHost);
    state.host = newHost;

    if (web3.eth === undefined) {
      state.web3 = new Web3(provider);
    } else {
      state.web3.setProvider(provider);
    }
  },
  setBlockNumber ({ blockNumber }, newBlockNumber) {
    state.blockNumber = newBlockNumber;
  },
  disconnect ({ web3 }) {
    if (web3 && web3.currentProvider !== undefined) {
      web3.currentProvider.disconnect();
      state.web3 = {};
      state.host = null;
      state.blockNumber = 0;
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
