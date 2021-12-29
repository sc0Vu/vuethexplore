<style scope></style>

<template>
<nav id="page-navbar" class="navbar" v-show="itemsValid">
  <div class="navbar-brand">
    <router-link class="navbar-item" to="/">{{ brandName }}</router-link>

    <div class="navbar-burger burger" v-on:click.prevent="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div class="navbar-menu" v-bind:class="{'is-active': isMenuActive}">
    <div class="navbar-start">
      <router-link class="navbar-item" v-bind:to="item.to" v-for="(item, index) in items" v-bind:key="index">{{ item.text }}</router-link>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'page-menu',
  props: {
    brandName: {
      type: String,
      default () {
        return 'Vuethexplorer';
      },
    },
    items: {
      type: Array,
      default () {
        return [];
      },
    },
  },
  data () {
    return {
      isMenuActive: false,
    };
  },
  computed: {
    itemsValid () {
      const length = this.items.length;

      if (length < 1) {
        return false;
      }
      return this.items.filter(item => (typeof item.text === 'string') && (item.text !== '') && (typeof item.to === 'string') && (item.to !== '')).length === length;
    },
  },
  methods: {
    toggleMenu () {
      if (this.isMenuActive) {
        this.isMenuActive = false;
      } else {
        this.isMenuActive = true;
      }
    },
  },
};
</script>
