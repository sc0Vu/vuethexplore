<template>
<div class="dropdown" v-bind:class="{'is-active': isShow}">
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" v-on:click="toggleDropdown">
      <span>{{ buttonText }}</span>
      <span class="icon is-small">
        <i class="fa fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu" role="menu">
    <div class="dropdown-content">
      <a class="dropdown-item" v-for="(item, index) in items" v-bind:key="index" v-bind:data-to="item.to" v-on:click="itemClicked">
        {{ item.text }}
      </a>
      <hr class="dropdown-divider">
      <input class="input" placeholder="Enter other host" v-on:change="inputChanged">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'page-dropdown',
  props: {
    buttonText: {
      type: String,
      default () {
        return '------';
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
      isShow: false,
    };
  },
  mounted () {
    const clickCallback = function clickCallback () {
      if (this.isShow === true) {
        this.toggleDropdown();
      }
    }.bind(this);

    this.$root.$el.addEventListener('click', clickCallback, true);
  },
  methods: {
    toggleDropdown () {
      this.isShow = this.isShow !== true;
      this.$emit('toggle', this.isShow);
    },
    itemClicked (e) {
      this.$emit('itemclick', e.target);
    },
    inputChanged (e) {
      this.$emit('inputChanged', e.target);
    },
  },
};
</script>
