import Vue from 'vue';
import Vuex from 'vuex';
import App from '../app.vue';
import Axios from 'axios';
import VueRouter from 'vue-router';
import Interceptors from '../../common/js/interceptors.js';
import GlobalStore from '../../common/js/globalStore.js';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.use(Vuex);
Vue.use(VueRouter);

const routes = [
];
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
});
const store=GlobalStore.store;

router.afterEach(Interceptors.registerAfterEach);
router.beforeEach(Interceptors.registerBeforeEach);

// Vue.prototype.$message = Message;


const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount(root);


