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
    <div>
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            Transaction #{{ transaction.transactionHash }}
          </p>
        </header>
        <div class="card-content">
          <div class="content" style="word-wrap: break-word;">
            <p>Block Hash: <router-link v-bind:to="{ name: 'Block', params: { blockNumber: transaction.blockHash } }">{{ transaction.blockHash }}</router-link></p>
            <p>Block Number: <router-link v-bind:to="{ name: 'Block', params: { blockNumber: transaction.blockNumber } }">{{ transaction.blockNumber }}</router-link></p>
            <p>From: <router-link v-bind:to="{ name: 'Address', params: { address: transaction.from } }">{{ transaction.from }}</router-link></p>
            <p>To: <router-link v-bind:to="{ name: 'Address', params: { address: transaction.to } }">{{ transaction.to }}</router-link></p>
            <p>Status: {{ transaction.status }}</p>
            <p>Contract Address: {{ (transaction.contractAddress) ? transaction.contractAddress : 'Not contract deployment transaction.' }}</p>
            <p>Cumulative Gas Used: {{ transaction.cumulativeGasUsed }}</p>
            <!-- <p>Gas Used: {{ transaction.cumulativeGasUsed }}</p> -->
            <p v-if="transaction.type > 1">Effective Gas Price: {{ transaction.effectiveGasPrice }}</p>
            <p>Transaction type: {{ transactionType }}</p>
            <p v-if="transaction.type > 0">Access list: {{ transaction.accessList ? transaction.accessList.join(',') : 'None' }}</p>
            <p>Logs: 
              <template v-if="logs !== false">
                <button class="button is-small" v-for="(log, index) in logs" v-on:click="selectLog(log)" v-bind:key="index" style="margin-right: 5px">log - {{ index }}</button>
                <template v-if="selectedLog.address">
                  <p style="margin-top: 15px;background-color: whitesmoke;padding: 1.25em 1.5em;word-wrap: normal;overflow-x:scroll;">
                    Selected log: {{ selectedLog.logIndex }}<br>
                    Address: {{ selectedLog.address }}<br>
                    Block Hash: <router-link v-bind:to="{ name: 'Block', params: { blockNumber: selectedLog.blockHash } }">{{ selectedLog.blockHash }}</router-link><br>
                    Block Number: <router-link v-bind:to="{ name: 'Block', params: { blockNumber: selectedLog.blockNumber } }">{{ selectedLog.blockNumber }}</router-link><br>
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
      selectedLog: {},
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
    logs () {
      const transaction = this.transaction;

      if (transaction.logs) {
        return (transaction.logs.length > 0) ? transaction.logs : false;
      }
      return false;
    },
    transactionType () {
      if (this.transaction.type === 1) {
        return 'EIP2930';
      } else if (this.transaction.type === 2) {
        return 'EIP1559';
      }
      return 'Legacy';
    },
  },
  created () {
    this.getTransaction(this.$route.params.transactionHash);
  },
  methods: {
    ...mapActions([
      'notify', 'setLoading',
    ]),
    isValidTransactionHash (transactionHash) {
      if (/^0x[0-9a-fA-F]{64}$/.test(transactionHash)) {
        return true;
      }
      return false;
    },
    getTransaction (transactionHash) {
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
      if (!this.isValidTransactionHash(transactionHash)) {
        this.setLoading(false);
        this.notify({ text: 'Transaction hash is not valid!', class: 'is-danger' });
        return;
      }

      this.web3.eth.getTransactionReceipt(transactionHash).then((transaction) => {
        let transactionType = 0;
        if (transaction.type !== undefined) {
          transactionType = parseInt(transaction.type, 16);
        }
        this.transaction = transaction;
        this.transaction.type = transactionType;
      }).catch((err) => {
        this.notify({ text: `Failed to get transaction ${transactionHash}! Error: ${err.message}`, class: 'is-danger' });
      }).then(() => {
        this.$nextTick(() => {
          this.setLoading(false);
        });
      });
    },
    selectLog (log) {
      if (log.address) {
        if (log.logIndex === this.selectedLog.logIndex) {
          this.selectedLog = {};
        } else {
          this.selectedLog = log;
        }
      } else {
        this.notify({ text: 'Please select correct log.', class: 'is-danger' });
      }
    },
  },
};
</script>
