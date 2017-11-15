<style scoped>
.notifications {
  max-width: 400px;
  min-width: 240px;
  width: 40%;
  position: fixed;
  left: 5px;
  bottom: 5px;
}

.notification {
  width: 100%;
  margin-bottom: 5px;
}
</style>

<template>
<div class="notifications">
	<div class="notification" v-for="(notification, index) in notifications" v-bind:key="index" v-bind:class="notification.class">
	  <button class="delete" v-on:click="remove(index)"></button>
	  {{ notification.text }}
	</div>
</div>
</template>

<script>
export default {
  name: 'page-notifications',
  props: {
    notifications: {
      type: Array,
      default () {
        return [];
      },
    },
  },
  methods: {
    remove (index) {
      this.notifications.splice(index, 1);
    },
  },
};
</script>
