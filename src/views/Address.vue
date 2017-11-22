<template>
<div>
  <div v-if="!connected">Please choose the host to connect blockchain! </div>
  <div v-if="connected && loading">Loading! </div>
  <div v-if="connected && !loading">
    <div class="section">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            Address #{{ address }}
          </p>
        </header>
        <div class="card-content">
          <div class="content" style="word-wrap: break-word;">
            <p>Balance: {{ balance }}</p>
            <p>Code: {{ code }}</p>
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
  name: 'address',
  data () {
    return {
      address: '',
      code: '',
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
    const address = this.$route.params.address;

    this.address = address;
    this.getAddress(address);
  },
  methods: {
    ...mapActions([
      'notify',
    ]),
    isValidAddress (address) {
      if (/^0x[0-9a-fA-F]{40}$/.test(address)) {
        return true;
      }
      return false;
    },
    getAddress (address) {
      if (!this.isValidAddress(address)) {
        this.notify({ text: 'Address is not valid!', class: 'is-danger' });
        return;
      }

      const batch = new this.web3.BatchRequest();

      batch.add(this.getAddressBalance(address));
      batch.add(this.getAddressCode(address));
      batch.execute();
    },
    getAddressBalance (address) {
      return this.web3.eth.getBalance.request(address, (err, balance) => {
        if (err) {
          this.notify({ text: `Failed to get balance ${address}! Error: ${err.message}`, class: 'is-danger' });
          return;
        }
        this.balance = balance;
      });
    },
    getAddressCode (address) {
      return this.web3.eth.getCode.request(address, (err, code) => {
        if (err) {
          this.notify({ text: `Failed to get code ${address}! Error: ${err.message}`, class: 'is-danger' });
          return;
        }
        this.code = code;
        this.loading = false;
      });
    },
  },
};
</script>
