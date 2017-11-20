<template>
<div class="section">
  <div v-if="!connected">Please choose the host to connect blockchain! </div>
  <div v-else>
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
    <div>
      <table class="table is-bordered">
        <thead>
          <tr>
            <th>Block Number</th>
            <th>Transactions</th>
            <th>Uncles</th>
            <th>Difficulty</th>
            <th>Gas Limit</th>
            <th>Gas Used</th>
            <th>Miner</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="block in blocks">
            <td>
              <router-link v-bind:to="{ name: 'Block', params: { blockNumber: block.number } }">{{ block.number }}</router-link>
            </td>
            <td><strong>{{ block.transactions.length }}</strong> txns</td>
            <td><strong>{{ block.uncles.length }}</strong> uncles</td>
            <td>{{ block.difficulty }}</td>
            <td>{{ block.gasLimit }}</td>
            <td>{{ block.gasUsed }}</td>
            <td>{{ block.miner }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import config from '../config';
import PageNumberInput from '../components/PageNumberInput';

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
    }),
    ...mapGetters([
      'connected',
    ]),
  },
  methods: {
    ...mapActions([
      'notify',
    ]),
    isValidNumber (number) {
      if (/^[\d]+$/.test(number)) {
        return true;
      }
      return false;
    },
    getBlocks (from, to) {
      if (from <= to) {
        return this.notify({ text: 'From must bigger than to!', class: 'is-danger' });
      }
      if ((from - 1) >= (to + this.limit)) {
        return this.notify({ text: 'From must smaller than to + limit!', class: 'is-danger' });
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

      const batch = new this.web3.BatchRequest();
      const callback = function callback (err, block) {
        if (err) {
          return this.notify({ text: `Failed to get block! Error: ${err.message}`, class: 'is-danger' });
        }
        return this.blocks.push(block);
      };

      for (let i = from; i >= to; i -= 1) {
        batch.add(this.web3.eth.getBlock.request(i, callback.bind(this)));
      }
      return batch.execute();
    },
    updateFrom (from) {
      this.from = from;
    },
    updateTo (to) {
      this.to = to;
    },
    updateLimit (limit) {
      this.limit = limit;
    },
  },
  watch: {
    blockNumber (val) {
      if (val !== this.from) {
        this.from = val;
        this.to = val - parseInt(this.limit, 10);
        this.to += 1;
        this.getBlocks(this.from, this.to);
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
        this.notify({ text: 'Please enter correct from or to number!', class: 'is-danger' });
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
        this.notify({ text: 'Please enter correct from or to number!', class: 'is-danger' });
      }
    },
    limit (val, oldVal) {
      if (this.isValidNumber(val) === true) {
        if (val > config.limitUpperBound || val < config.limitLowerBound) {
          this.notify({ text: `Limit must between ${config.limitLowerBound} and ${config.limitUpperBound}!`, class: 'is-danger' });
          this.limit = oldVal;
          return;
        }
        if (this.from - this.to > this.limit) {
          this.to = this.from - val;
          return;
        }
        this.getBlocks(this.from, this.to);
      } else {
        this.notify({ text: 'Please enter correct limit number!', class: 'is-danger' });
      }
    },
  },
};
</script>
