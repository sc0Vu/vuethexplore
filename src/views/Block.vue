<template>
<div class="section">
  <div v-if="!connected">Please choose the host to connect blockchain! </div>
  <div v-if="connected && loading">Loading! </div>
  <div v-if="connected && !loading">
    <div class="columns">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            Block #{{ block.number }}
          </p>
        </header>
        <div class="card-content">
          <div class="content" style="word-wrap: break-word;">
            <p>Transaction: <router-link v-bind:to="{ name: 'Transaction', params: { transactionHash: block.transactions[0] } }">{{ block.transactions[0] }}</router-link>, and other {{block.transactions.length - 1 }} transactions</p>
            <p>Difficulty {{ block.difficulty }}</p>
            <p>Total Difficulty: {{ block.totalDifficulty }}</p>
            <p>Gas Limit: {{ block.gasLimit }}</p>
            <p>Gas Used: {{ block.gasUsed }}</p>
            <p>Hash: {{ block.hash }}</p>
            <p>Parent Hash: <router-link v-bind:to="{ name: 'Block', params: { blockNumber: block.parentHash } }">{{ block.parentHash }}</router-link></p>
            <p>Logs Bloom: {{ block.logsBloom }}</p>
            <p>SHA3 Uncles: {{ block.sha3Uncles }}</p>
            <p>Miner: {{ block.miner }}</p>
            <p>Mix Hash: {{ block.mixHash }}</p>
            <p>Nonce: {{ block.nonce }}</p>
            <p>Size: {{ block.size }}</p>
            <p>Extra Data: {{ toUtf8(block.extraData) }} (Hex: {{ block.extraData }})</p>
            <time>Timestamp: {{ block.timestamp }} ({{ new Date(block.timestamp * 1000).toString() }})</time>
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
      loading: true,
    };
  },
  computed: {
    ...mapState({
      web3 (state) {
        return state.blockchain.web3;
      },
    }),
    ...mapGetters([
      'connected',
    ]),
  },
  created () {
    const blockNumber = this.$route.params.blockNumber;

    this.getBlock(blockNumber);
  },
  methods: {
    ...mapActions([
      'notify',
    ]),
    isValidBlockNumber (blockNumber) {
      if (/^[\d]+$/.test(blockNumber)) {
        return true;
      }
      if (/^0x[0-9a-f]{64}$/.test(blockNumber)) {
        return true;
      }
      return false;
    },
    getBlock (blockNumber) {
      if (!this.connected) {
        this.notify({ text: 'Please choose the host to connect blockchain!', class: 'is-danger' });
        return;
      }
      if (!this.isValidBlockNumber(blockNumber)) {
        this.notify({ text: 'Block number is not valid!', class: 'is-danger' });
        return;
      }

      this.web3.eth.getBlock(blockNumber).then((block) => {
        this.block = block;
      }).catch((err) => {
        this.notify({ text: `Failed to get block ${blockNumber}! Error: ${err.message}`, class: 'is-danger' });
      }).then(() => {
        this.loading = false;
      });
    },
    toUtf8 (hex) {
      return this.web3.utils.toUtf8(hex);
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
