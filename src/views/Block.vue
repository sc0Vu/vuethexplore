<style scoped>
  .loading .button {
    border: none;
  }
  .loading .button:hover {
    cursor: initial;
  }
</style>

<template>
<div class="container">
  <div v-if="!connected">Please choose the host to connect blockchain! </div>
  <div class="loading" v-if="connected && loading"><span class="button is-loading"></span><span class="button">Loading!</span></div>
  <div v-if="connected && !loading">
    <div class="section">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            Block #{{ block.number }}
          </p>
          <div class="tabs">
            <ul>
              <li v-bind:class="{ 'is-active': isSelected('information') }">
                <a v-on:click="select('information')">Information</a>
              </li>
              <li v-show="hasTransaction" v-bind:class="{ 'is-active': isSelected('transactions') }">
                <a v-on:click="select('transactions')">Transactions</a>
              </li>
            </ul>
          </div>
        </header>
        <div class="card-content">
          <div class="content" style="word-wrap: break-word;">
            <div v-show="isSelected('information')">
              <p v-show="hasTransaction">Transaction: <router-link v-bind:to="{ name: 'Transaction', params: { transactionHash: block.transactions[0] } }">{{ block.transactions[0] }}</router-link>, and other {{block.transactions.length - 1 }} transactions</p>
              <p>Difficulty {{ block.difficulty }}</p>
              <p>Total Difficulty: {{ block.totalDifficulty }}</p>
              <p>Gas Limit: {{ block.gasLimit }}</p>
              <p>Gas Used: {{ block.gasUsed }}</p>
              <p>Hash: {{ block.hash }}</p>
              <p>Parent Hash: <router-link v-bind:to="{ name: 'Block', params: { blockNumber: block.parentHash } }">{{ block.parentHash }}</router-link></p>
              <p>Logs Bloom: {{ block.logsBloom }}</p>
              <p>SHA3 Uncles: {{ block.sha3Uncles }}</p>
              <p>Miner: <router-link v-bind:to="{ name: 'Address', params: { address: block.miner } }">{{ block.miner }}</router-link></p>
              <p>Mix Hash: {{ block.mixHash }}</p>
              <p>Nonce: {{ block.nonce }}</p>
              <p>Size: {{ block.size }}</p>
              <p>Extra Data: {{ toUtf8(block.extraData) }} (Hex: {{ block.extraData }})</p>
              <time>Timestamp: {{ block.timestamp }} ({{ new Date(block.timestamp * 1000).toString() }})</time>
            </div>
            <div v-show="isSelected('transactions')">
              <p v-for="transaction in block.transactions">
                <router-link v-bind:to="{ name: 'Transaction', params: { transactionHash: transaction } }">{{ transaction }}</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'block',
  data () {
    return {
      block: {},
      selected: '',
    };
  },
  computed: {
    ...mapState({
      web3 (state) {
        return state.blockchain.web3;
      },
      loading (state) {
        return state.page.loading;
      },
    }),
    ...mapGetters([
      'connected',
    ]),
    hasTransaction () {
      return (this.block.transactions !== undefined) ? (this.block.transactions.length > 0) : false;
    },
  },
  created () {
    const blockNumber = this.$route.params.blockNumber;

    this.getBlock(blockNumber);
  },
  methods: {
    ...mapActions([
      'notify', 'setLoading',
    ]),
    isValidBlockNumber (blockNumber) {
      if (/^[\d]+$/.test(blockNumber)) {
        return true;
      }
      if (/^0x[0-9a-fA-F]{64}$/.test(blockNumber)) {
        return true;
      }
      return false;
    },
    getBlock (blockNumber) {
      this.setLoading(true);

      // if (!this.connected) {
      //   this.$nextTick(() => {
      //     this.setLoading(false);
      //   });
      //   this.notify({
      //     text: 'Please choose the host to connect blockchain!',
      //     class: 'is-danger'
      //   });
      //   return;
      // }
      if (!this.isValidBlockNumber(blockNumber)) {
        this.$nextTick(() => {
          this.setLoading(false);
        });
        this.notify({ text: 'Block number is not valid!', class: 'is-danger' });
        return;
      }

      this.web3.eth.getBlock(blockNumber).then((block) => {
        this.block = block;
      }).catch((err) => {
        this.notify({ text: `Failed to get block ${blockNumber}! Error: ${err.message}`, class: 'is-danger' });
      }).then(() => {
        this.select('information');
        this.$nextTick(() => {
          this.setLoading(false);
        });
      });
    },
    toUtf8 (hex) {
      let utf8 = '';

      try {
        utf8 = this.web3.utils.toUtf8(hex);
      } catch (e) {
        utf8 = hex;
      }
      return utf8;
    },
    isSelected (tab) {
      if (/^[\w]+$/.test(tab) === false) {
        this.notify({ text: `Cannot check ${tab} is selected!`, class: 'is-danger' });
        return false;
      }
      return tab === this.selected;
    },
    select (tab) {
      if (/^[\w]+$/.test(tab) === false) {
        this.notify({ text: `Cannot select ${tab}!`, class: 'is-danger' });
      }
      this.selected = tab;
    },
  },
  watch: {
    $route (to, from) {
      const blockNumber = to.params.blockNumber;

      if (blockNumber !== from.params.blockNumber) {
        this.getBlock(blockNumber);
      }
    },
  },
};
</script>
