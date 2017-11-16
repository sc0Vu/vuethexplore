import Vue from 'vue';
import Vuex from 'vuex';
import page from './modules/page';
import blockchain from './modules/blockchain';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    page, blockchain,
  },
});
