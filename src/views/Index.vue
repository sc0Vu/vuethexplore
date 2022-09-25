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
  <div v-if="!connected">Please choose the host to connect blockchain!</div>
  <div class="loading" v-if="connected && loading"><span class="button is-loading"></span><span class="button">Loading!</span></div>
  <div v-if="connected && !loading">
    <div class="columns">
      <div class="column control">
        <page-number-input placeholder="from" v-bind:inputValue="from" v-on:update="updateFrom"></page-number-input>
      </div>
      <div class="column control">
        <page-number-input placeholder="to" v-bind:inputValue="to" v-on:update="updateTo"></page-number-input>
      </div>
      <div class="column control">
        <page-number-input placeholder="limit" v-bind:inputValue="limit" v-on:update="updateLimit"></page-number-input>
      </div>
    </div>
    <div class="table-container">
      <table class="table is-bordered is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Block Number</th>
            <th>Transactions</th>
            <th>Uncles</th>
            <th>Gas Limit</th>
            <th>Gas Used</th>
            <th>Miner</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="block in blocks">
            <td>
              <router-link v-bind:to="{ name: 'Block', params: { blockNumber: block.number } }">{{ block.number }}</router-link>
              &nbsp; <span v-if="block.baseFeePerGas && block.baseFeePerGas !== ''" class="tag is-primary">EIP1559</span>
              &nbsp; <span v-if="block.difficulty === '0'" class="tag is-success">Merge</span>
            </td>
            <td><strong>{{ block.transactions.length }}</strong> txns</td>
            <td><strong>{{ block.uncles.length }}</strong> uncles</td>
            <td>{{ block.gasLimit }}</td>
            <td>{{ block.gasUsed }}</td>
            <td>
              <router-link v-bind:to="{ name: 'Address', params: { address: block.miner } }">{{ block.miner }}</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import config from '@/config';
import PageNumberInput from '@/components/PageNumberInput';

export default {
  name: 'index',
  components: {
    PageNumberInput,
  },
  data () {
    return {
      limit: 10,
      from: 0,
      to: 0,
      blocks: [],
    };
  },
  computed: {
    ...mapState({
      blockNumber (state) {
        return state.blockchain.blockNumber;
      },
      web3 (state) {
        return state.blockchain.web3;
      },
      host (state) {
        return state.blockchain.host;
      },
      loading (state) {
        return state.page.loading;
      },
      keyPrefix () {
        return this.web3.utils ? this.web3.utils.sha3(this.host) : '';
      },
    }),
    ...mapGetters([
      'connected',
    ]),
  },
  created () {
    if (this.$storage.isExist(`${this.keyPrefix}:config.blockFromStorageKey`) === true) {
      this.from = parseInt(this.$storage.getItem(`${this.keyPrefix}:config.blockFromStorageKey`), 10);
    }
    if (this.$storage.isExist(`${this.keyPrefix}:config.blockToStorageKey`) === true) {
      this.to = parseInt(this.$storage.getItem(`${this.keyPrefix}:config.blockToStorageKey`), 10);
    }
    if (this.$storage.isExist(`${this.keyPrefix}:config.blockLimitStorageKey`) === true) {
      this.limit = parseInt(this.$storage.getItem(`${this.keyPrefix}:config.blockLimitStorageKey`), 10);
    }
  },
  methods: {
    ...mapActions([
      'notify', 'setLoading',
    ]),
    isValidNumber (number) {
      if (typeof number === 'number') {
        return true;
      }
      if (/^[\d]+$/.test(number)) {
        return true;
      }
      return false;
    },
    getBlocks (from, to) {
      this.setLoading(true);

      if (from <= to) {
        this.$nextTick(() => {
          this.setLoading(false);
        });
        this.notify({ text: 'From must bigger than to!', class: 'is-danger' });
        return;
      }
      if ((from - 1) >= (to + this.limit)) {
        this.$nextTick(() => {
          this.setLoading(false);
        });
        this.notify({ text: 'From must smaller than to + limit!', class: 'is-danger' });
        return;
      }

      // clear blocks
      this.blocks = [];

      // use batch instead
      // for (let i = from; i >= to; i -= 1) {
      //   this.web3.eth.getBlock(i).then((block) => {
      //     this.blocks.push(block);
      //   }).catch((err) => {
      //     this.notify({ text: `Failed to get block ${i}!
      // Error: ${err.message}`, class: 'is-danger' });
      //   });
      // }

      // let count = 0;
      // const total = from - to;
      const batch = new this.web3.BatchRequest();
      const callback = function callback (err, block) {
        this.$nextTick(() => {
          this.setLoading(false);
        });

        if (err) {
          this.notify({ text: `Failed to get block! Error: ${err.message}`, class: 'is-danger' });
          return;
        }

        // due to batch execute return null
        // we use count to check batch state
        // if (count >= total) {
        //   this.setLoading(false);
        // }
        // count += 1;

        // should we use this: block === null || block === undefined
        if (!block) {
          return;
        }
        this.blocks.push(block);
      };

      for (let i = from; i >= to; i -= 1) {
        batch.add(this.web3.eth.getBlock.request(i, callback.bind(this)));
      }
      batch.execute();

      // save from and in to storage
      this.$storage.setItem(`${this.keyPrefix}:config.blockFromStorageKey`, from);
      this.$storage.setItem(`${this.keyPrefix}:config.blockToStorageKey`, to);
    },
    updateFrom (from) {
      this.from = from;
      this.$storage.setItem(`${this.keyPrefix}:config.blockFromStorageKey`, from);
    },
    updateTo (to) {
      this.to = to;
      this.$storage.setItem(`${this.keyPrefix}:config.blockToStorageKey`, to);
    },
    updateLimit (limit) {
      this.limit = limit;
      this.$storage.setItem(`${this.keyPrefix}:config.blockLimitStorageKey`, limit);
    },
  },
  watch: {
    blockNumber (val) {
      if (val !== this.from) {
        this.from = val;
        this.$nextTick(() => {
          this.to = val - this.limit;
          this.to += 1;
        });
        // this.getBlocks(this.from, this.to);
      }
    },
    from (val) {
      if (
        this.isValidNumber(val) === true &&
        val > this.to &&
        (val - this.to) <= (this.limit - 1)
        ) {
        this.getBlocks(this.from, this.to);
      } else {
        this.notify({ text: 'Please enter correct from or to number!', class: 'is-warning' });
      }
    },
    to (val) {
      if (
        this.isValidNumber(val) === true &&
        val < this.from &&
        (this.from - val) <= (this.limit - 1)
        ) {
        this.getBlocks(this.from, this.to);
      } else {
        this.notify({ text: 'Please enter correct from or to number!', class: 'is-warning' });
      }
    },
    limit (val, oldVal) {
      if (this.isValidNumber(val) === true) {
        if (val > config.limitUpperBound || val < config.limitLowerBound) {
          this.notify({ text: `Limit must between ${config.limitLowerBound} and ${config.limitUpperBound}!`, class: 'is-danger' });
          this.limit = oldVal;
          return;
        }
        this.$storage.setItem(`${this.keyPrefix}:config.blockLimitStorageKey`, val);
        if (this.from - this.to > this.limit) {
          this.to = this.from - val;
          return;
        }
        this.getBlocks(this.from, this.to);
      } else {
        this.notify({ text: 'Please enter correct limit number!', class: 'is-warning' });
      }
    },
  },
};
</script>
