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
          <p class="card-header-title" v-if="isContractAddress">
            Contract Address #{{ address }}
          </p>
          <p class="card-header-title" v-else>
            Address #{{ address }}
          </p>
        </header>
        <div class="card-content">
          <div class="content" style="word-wrap: break-word;">
            <p>Balance in wei: {{ balance }}</p>
            <p>Balance in ether: {{ web3.utils.fromWei(balance, 'ether') }}</p>
            <p v-if="isContractAddress">Code: 
              <pre>{{ code }}</pre>
            </p>
            <p v-if="addressQRCodeURI"><img v-bind:src="addressQRCodeURI"></p>
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
      addressQRCodeURI: '',
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
    isContractAddress () {
      return this.code !== '' && this.code !== '0x';
    },
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
      'notify', 'setLoading',
    ]),
    isValidAddress (address) {
      if (/^0x[0-9a-fA-F]{40}$/.test(address)) {
        return true;
      }
      return false;
    },
    getAddress (address) {
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
      if (!this.isValidAddress(address)) {
        this.$nextTick(() => {
          this.setLoading(false);
        });
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
        this.$nextTick(() => {
          this.setLoading(false);
        });

        if (err) {
          this.notify({ text: `Failed to get code ${address}! Error: ${err.message}`, class: 'is-danger' });
          return;
        }
        this.code = code;
      });
    },
  },
};
</script>
