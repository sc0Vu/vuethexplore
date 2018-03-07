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
            Address #{{ address }}
          </p>
        </header>
        <div class="card-content">
          <div class="content" style="word-wrap: break-word;">
            <p>Balance in wei: {{ balance }}</p>
            <p>Balance in ether: {{ web3.utils.fromWei(balance, 'ether') }}</p>
            <p>Code: {{ code }}</p>
            <!-- <p v-if="addressQRCodeURI"><img v-bind:src="addressQRCodeURI"></p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import QRCode from 'qrcode';

export default {
  name: 'address',
  data () {
    return {
      address: '',
      code: '',
      loading: true,
      addressQRCodeURI: '',
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
  mounted () {
    this.$nextTick(() => {
      QRCode.toDataURL(this.address)
            .then((dataURI) => {
              this.addressQRCodeURI = dataURI;
              this.notify({ text: 'Render qrcode successfully!', class: 'is-info' });
            })
            .catch((err) => {
              this.notify({ text: `Failed to render qrcode! Error: ${err.message}`, class: 'is-danger' });
            });
    });
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
