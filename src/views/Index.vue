<template>
<div class="section">
  <div v-if="!connected">Please choose the host to connect blockchain! </div>
  <div v-else>
    <div class="columns">
      <div class="column control">
        <input class="input" type="text" placeholder="from" v-model="from">
      </div>
      <div class="column control">
        <input class="input" type="text" placeholder="from" v-model="to">
      </div>
      <div class="column control">
        <input class="input" type="text" placeholder="from" v-model="limit">
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
            <td>{{ block.number }}</td>
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

export default {
  name: 'index',
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
      if (from > (to + parseInt(this.limit, 10))) {
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
      if (this.isValidNumber(val) === true && val > this.to && (val - this.to) <= this.limit) {
        this.getBlocks(this.from, this.to);
      }
    },
    to (val) {
      if (this.isValidNumber(val) === true && val < this.from && (this.from - val) <= this.limit) {
        this.getBlocks(this.from, this.to);
      }
    },
    limit (val) {
      if (this.isValidNumber(val) === true) {
        this.getBlocks(this.from, this.to);
      }
    },
  },
};
</script>
