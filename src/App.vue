<style scope>
.navbar-start > .navbar-item.active {
  background-color: #eee
}
.section .panel {
  overflow: hidden;
}
</style>

<template>
<div id="app">
  <div class="container">
    <page-menu v-bind:items="menuItems"></page-menu>
    <section class="hero is-primary">
      <div class="hero-body">
        <div>
          <h1 class="title">Vuethexplore - vue + ethereum blockchain explore.</h1>
          <h2 class="subtitle">
            <template v-if="isBeta">
              <strong>Notice: the web3 is in beta version!</strong><br>
            </template>
            Web3 <strong>{{ version }}</strong> status: <strong>{{ (connected === true) ? 'connected' : 'not connected' }}</strong>.
            <template v-if="host">
              <br>Host: <strong>{{ host }}</strong>
            </template>
            <template v-if="blockNumber">
              <br>Latest block number: <strong>{{ blockNumber }}</strong>
            </template>
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="level-right">
        <page-dropdown class="is-right" v-bind:buttonText="dropdownText" v-bind:items="dropdownItems" v-on:itemclick="changeHost" v-on:inputChanged="changeHost"></page-dropdown>
      </div>
    </section>
    <section class="section">
      <div>
        <transition appear>
          <router-view></router-view>
        </transition>
      </div>
    </section>
  </div>
  <footer class="footer">
    <div class="container">
      <p>Made with <span class="bd-emoji">❤️</span> by <strong><a href="https://blog.ptrgl.com/" target="_blank">Petar Lai</a></strong></p>
      <p>Css framework: <strong><a href="http://bulma.io/" target="_blank">bulma</a></strong></p>
      <p>Js framework: <strong><a href="https://vuejs.org/" target="_blank">vue</a></strong></p>
    </div>
  </footer>
  <page-notifications></page-notifications>
</div>
</template>

<script>
import PageMenu from '@/components/PageMenu';
import PageDropdown from '@/components/PageDropdown';
import PageNotifications from '@/components/PageNotifications';
import config from '@/config';
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'app',
  components: {
    PageMenu, PageDropdown, PageNotifications,
  },
  data () {
    return {
      menuItems: [],
      dropdownItems: [],
      dropdownText: 'Choose blockchain',
    };
  },
  computed: {
    ...mapState({
      web3 (state) {
        return state.blockchain.web3;
      },
      host (state) {
        return state.blockchain.host;
      },
      blockNumber (state) {
        return state.blockchain.blockNumber;
      },
    }),
    ...mapGetters([
      'version', 'connected', 'isBeta',
    ]),
  },
  created () {
    const items = [];

    Object.keys(config.hosts).forEach((i) => {
      items.push({
        to: config.hosts[i].rpcUri,
        text: `${i} ${(config.hosts[i].test === true) ? 'test ' : ''}net`,
      });
    });
    this.dropdownItems = items;
  },
  mounted () {
    this.notify({ text: 'You can use this explore on ethereum based blockchain, if you have any question, please open an issue on github!', class: 'is-info' });
  },
  methods: {
    changeHost (target) {
      const host = target.dataset.to || target.value || '';

      if (this.isHostValid(host) === true) {
        if (this.host === host) {
          this.notify({ text: 'Choose another one!', class: 'is-primary' });
          return;
        }

        this.dropdownText = target.textContent.trim() || 'Custom host';
        this.notify({ text: 'Try to connect to the host, please wait!', class: 'is-primary' });
        this.setHost(host);
        this.web3.eth.getBlockNumber().then((bn) => {
          this.setBlockNumber(bn);
          this.notify({ text: 'Connect to the host successfully!', class: 'is-success' });
        }).catch((err) => {
          this.notify({ text: `Something wrong happened! Error: ${err.message}`, class: 'is-danger' });
        });
      } else {
        this.notify({ text: 'Host wasn\' valid!', class: 'is-danger' });
      }
    },
    isHostValid (host) {
      if (!host) {
        return false;
      }
      return /https?:\/\/([\w.]+):?([\d]+)?/.test(host);
    },
    ...mapActions([
      'notify', 'setHost', 'setBlockNumber',
    ]),
  },
};
</script>
