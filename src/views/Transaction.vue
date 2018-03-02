<template>
<div>
  <div v-if="!connected">Please choose the host to connect blockchain! </div>
  <div v-if="connected && loading">Loading! </div>
  <div v-if="connected && !loading">
    <div class="section">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            Transaction #{{ transaction.transactionHash }}
          </p>
        </header>
        <div class="card-content">
          <div class="content" style="word-wrap: break-word;">
            <p>Block Hash: <router-link v-bind:to="{ name: 'Block', params: { blockNumber: transaction.blockHash } }">{{ transaction.blockHash }}</router-link></p>
            <p>Block Number: <router-link v-bind:to="{ name: 'Block', params: { blockNumber: transaction.blockNumber } }">{{ transaction.blockNumber 
            }}</router-link></p>
            <p>From: <router-link v-bind:to="{ name: 'Address', params: { address: transaction.from } }">{{ transaction.from }}</router-link></p>
            <p>To: <router-link v-bind:to="{ name: 'Address', params: { address: transaction.to } }">{{ transaction.to }}</router-link></p>
            <p>Status: {{ transaction.status }}</p>
            <p>Contract Address: {{ (transaction.contractAddress) ? transaction.contractAddress : 'Not contract transaction.' }}</p>
            <p>Logs: 
              <template v-if="logs !== false">
                <ul>
                  <li v-for="(log, index) in logs" v-on:click="selectLog(log)"><code>log - {{ index }}</code></li>
                </ul>
                <template v-if="selectedLog.address">
                  <p style="background-color: whitesmoke;padding: 1.25em 1.5em;word-wrap: normal;overflow-x:scroll;">
                    Selected log: {{ selectedLog.logIndex }}<br>
                    Address: {{ selectedLog.address }}<br>
                    Block Hash: <router-link v-bind:to="{ name: 'Block', params: { blockNumber: selectedLog.blockHash } }">{{ selectedLog.blockHash }}</router-link><br>
                    Block Number: <router-link v-bind:to="{ name: 'Block', params: { blockNumber: selectedLog.blockNumber } }">{{ selectedLog.blockNumber 
                  }}</router-link><br>
                    Data: {{ selectedLog.data }}<br>
                    Removed: {{ selectedLog.removed }}<br>
                    Topics: {{ selectedLog.topics }}<br>
                    Transaction Hash: {{ selectedLog.transactionHash }}<br>
                    Transaction Index: {{ selectedLog.transactionIndex }}<br>
                  </p>
                </template>
              </template>
              <span v-else>No logs.</span>
            </p>
            <p>Logs Bloom: {{ transaction.logsBloom }}</p>
            <p>Cumulative Gas Used: {{ transaction.cumulativeGasUsed }}</p>
            <p>Gas Used: {{ transaction.cumulativeGasUsed }}</p>
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
  name: 'transaction',
  data () {
    return {
      transaction: {},
      loading: true,
      selectedLog: {},
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
    logs () {
      const transaction = this.transaction;

      if (transaction.logs) {
        return (transaction.logs.length > 0) ? transaction.logs : false;
      }
      return false;
    },
  },
  created () {
    this.getTransaction(this.$route.params.transactionHash);
  },
  methods: {
    ...mapActions([
      'notify',
    ]),
    isValidTransactionHash (transactionHash) {
      if (/^0x[0-9a-fA-F]{64}$/.test(transactionHash)) {
        return true;
      }
      return false;
    },
    getTransaction (transactionHash) {
      if (!this.isValidTransactionHash(transactionHash)) {
        this.notify({ text: 'Transaction hash is not valid!', class: 'is-danger' });
        return;
      }

      this.web3.eth.getTransactionReceipt(transactionHash).then((transaction) => {
        this.transaction = transaction;
      }).catch((err) => {
        this.notify({ text: `Failed to get transaction ${transactionHash}! Error: ${err.message}`, class: 'is-danger' });
      }).then(() => {
        this.loading = false;
      });
    },
    selectLog (log) {
      if (log.address) {
        this.selectedLog = log;
      } else {
        this.notify({ text: 'Please select correst log.', class: 'is-danger' });
      }
    },
  },
};
</script>
