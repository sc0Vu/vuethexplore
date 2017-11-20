<template>
<input type="text" v-bind:class="inputClass" v-bind:placeholder="inputPlaceholder" v-bind:value="inputValue" v-on:change="update(inputValue)">
</template>

<script>
export default {
  name: 'page-number-input',
  props: {
    inputClass: {
      type: String,
      default () {
        return 'input';
      },
    },
    inputPlaceholder: {
      type: String,
      default () {
        return '';
      },
    },
    inputValue: {
      type: String,
      default () {
        return '';
      },
    },
  },
  methods: {
    update (value) {
      this.inputValue = parseInt(value, 10);
    },
  },
};
</script>
