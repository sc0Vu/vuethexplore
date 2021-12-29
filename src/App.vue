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
  <div class="container" v-if="menuItems.length > 0">
    <page-menu v-bind:items="menuItems"></page-menu>
  </div>

  <section class="hero is-primary">
    <div class="hero-body">
      <div>
        <h1 class="title">Vuethexplorer - vue + ethereum blockchain explorer.</h1>
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
    <div class="container">
      <div class="">
        <button class="button is-small is-primary" v-on:click.prevent.self="previousPage">Previous</button>
        <button class="button is-small is-info" v-on:click.prevent.self="nextPage">Next</button>
        <page-dropdown class="" v-bind:buttonText="dropdownText" v-bind:items="dropdownItems" v-on:itemclick="changeHost" v-on:inputChanged="changeHost"></page-dropdown>
      </div>
    </div>
  </section>

  <section>
    <transition appear>
      <router-view></router-view>
    </transition>
  </section>

  <footer class="footer">
    <div class="container">
      <p>Made with <span class="bd-emoji">❤️</span> by <strong><a href="https://medium.com/@sc0vu" target="_blank">Peter Lai</a></strong></p>
      <p>CSS framework: <strong><a href="http://bulma.io/" target="_blank">bulma</a></strong></p>
      <p>JS framework: <strong><a href="https://vuejs.org/" target="_blank">vue</a></strong></p>
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

    if (this.$storage.isExist(config.hostStorageKey)) {
      const host = this.$storage.getItem(config.hostStorageKey);

      this.selectHost(host);
    }
  },
  mounted () {
    this.notify({ text: 'You can use this explorer on ethereum based blockchain, if you have any question, please open an issue on github!', class: 'is-info' });
  },
  methods: {
    selectHost (host) {
      if (this.isHostValid(host) === true) {
        if (this.host === host) {
          this.notify({ text: 'Choose another one!', class: 'is-primary' });
          return;
        }

        // get host dropdown text
        let network = {};

        Object.keys(config.hosts).forEach((key) => {
          if (config.hosts[key].rpcUri === host) {
            network = config.hosts[key];
            network.key = key;
          }
        });

        if (network.key !== undefined) {
          this.dropdownText = (network.test === true) ? `${network.key} test net` : `${network.key} net`;
        } else {
          this.dropdownText = 'Custom host';
        }
        this.notify({ text: 'Try to connect to the host, please wait!', class: 'is-primary' });
        this.setHost(host);
        this.web3.eth.getBlockNumber().then((bn) => {
          this.setBlockNumber(bn);
          this.notify({ text: 'Connect to the host successfully!', class: 'is-success' });
        }).catch((err) => {
          this.notify({ text: `Something wrong happened! Error: ${err.message}`, class: 'is-danger' });
        });
      } else {
        this.notify({ text: 'Host saved in storage wasn\' valid!', class: 'is-danger' });
      }
    },
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
        this.$storage.setItem(config.hostStorageKey, host);
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
    previousPage () {
      this.$router.history.go(-1);
    },
    nextPage () {
      this.$router.history.go(1);
    },
    ...mapActions([
      'notify', 'setHost', 'setBlockNumber',
    ]),
  },
};
</script>
