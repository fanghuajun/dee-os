import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from '../app.vue';
import GlobalStore from '../../common/js/globalStore.js';
import NewIndex from '../components/NewIndex.vue';


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(VueRouter);
const store=GlobalStore.store;
var routes=[
    {path: '/',component: NewIndex},
];
const router=new VueRouter({routes});

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount(root);
