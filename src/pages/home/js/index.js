import Vue from 'vue';
import Vuex from 'vuex';
import App from '../app.vue';
import VueRouter from 'vue-router';
import GlobalStore from '../../common/js/globalStore.js';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(VueRouter);
const store=GlobalStore.store;
var routes=[ {path: '../index/index.html', name: '客户销售订单'},];
var router=new VueRouter({
  routes
});
const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount(root);
