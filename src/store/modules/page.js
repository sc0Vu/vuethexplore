// initial state
const state = {
  notifications: [],
  loading: true,
};

// getters
const getters = {
  hasNotifications ({ notifications }) {
    return notifications.length > 0;
  },
};

// actions
const actions = {
  notify ({ commit }, notification) {
    commit('notify', notification);
  },
  removeNotification ({ commit }, index) {
    commit('removeNotification', index);
  },
  setLoading ({ commit }, loading) {
    commit('setLoading', loading);
  },
};

// mutations
const mutations = {
  notify ({ notifications }, notification) {
    notifications.push(notification);
  },
  removeNotification ({ notifications }, index) {
    notifications.splice(index, 1);
  },
  setLoading ({ loading }, isLoading) {
    state.loading = isLoading;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
