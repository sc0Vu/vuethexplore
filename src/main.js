// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from '@/App';
import store from '@/store';
import router from '@/router';
import storage from '@/plugins/storage/index';

Vue.config.productionTip = false;

// rewrite document title
const APP_NAME = 'Vue EthExplore';

router.afterEach((to) => {
  let title = to.meta.title || 'Ethexplore';
  const keys = Object.keys(to.params);

  if (keys.length > 0) {
    title = `${title} #${to.params[keys[0]]}`;
  }

  title = `${title} | ${APP_NAME}`;
  document.title = title;
});

Vue.use(storage);

/* eslint-disable no-new */
new Vue({
  el: '#vuethexplore',
  store,
  router,
  template: '<App/>',
  components: { App },
});
