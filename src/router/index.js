import Vue from 'vue';
import Router from 'vue-router';

// router views
const Index = () => import('@/views/Index');
const Block = () => import('@/views/Block');
const Transaction = () => import('@/views/Transaction');
const Address = () => import('@/views/Address');

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        title: 'Index',
      },
    }, {
      path: '/block/:blockNumber',
      name: 'Block',
      component: Block,
      meta: {
        title: 'Block',
      },
    }, {
      path: '/transaction/:transactionHash',
      name: 'Transaction',
      component: Transaction,
      meta: {
        title: 'Transaction',
      },
    }, {
      path: '/address/:address',
      name: 'Address',
      component: Address,
      meta: {
        title: 'Address',
      },
    },
  ],
});
