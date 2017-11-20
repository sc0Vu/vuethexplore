<template>
<input type="text" v-bind:class="inputClass" v-bind:placeholder="inputPlaceholder" v-bind:value="inputValue" v-on:change="update">
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
      type: Number,
      default () {
        return 0;
      },
    },
  },
  methods: {
    update (e) {
      this.$emit('update', parseInt(e.target.value, 10));
    },
  },
};
</script>
