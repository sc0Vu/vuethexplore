import Vue from 'vue';
import Router from 'vue-router';

// router views
const Index = () => import('@/views/Index');
const Block = () => import('@/views/Block');

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    }, {
      path: '/block/:blockNumber',
      name: 'Block',
      component: Block,
    },
  ],
});
