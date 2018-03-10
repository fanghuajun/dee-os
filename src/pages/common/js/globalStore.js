import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import accessManager from './accessManager'
import Axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Vuex);
// if (Vue.http == null) {
    Axios.defaults.validateStatus = status => {
        return status < 500
    }
    // 设置请求token
    Axios.interceptors.request.use(config => {
        var token = sessionStorage.getItem('token')
        config.headers['Authorization'] = 'Bearer ' + token
         console.log(config)
        return config
    })

    // 接口错误拦截
    Axios.interceptors.response.use(res => {
        if (res.status === 401) {
            // Vue.$message({
            //     type: 'warning',
            //     message: '登录身份过期，请重新登录。'
            // })
            sessionStorage.removeItem('token')
            sessionStorage.removeItem('user')
            // router.push({ name: 'login' })
            location.href="../login/login.html";
            return Promise.reject(new Error('身份过期'))
        } else {
            return res.data
        }
    }, err => {
        // Message({
        //     title: '服务错误',
        //     message: '服务器响应错误 ' + err.message
        // })
        return Promise.reject(err)
    })
    Vue.prototype.$http = Axios
    Vue.http = Axios
// }

export default {
    store: new Vuex.Store({
        state: {
            user: null,
            isLogin: false
        },
        actions: {
            async login({ commit }, user) {
                commit('SET_DOING_LOGIN', true);
                // 模拟登陆
                var url = '/oauth/token?username='+user.username+'&password='+user.password+'&grant_type=password&scope=read&client_id=rajithapp&client_secret=secret';
                var res = await new Promise((resolve, reject) => {
                    Vue.http.post(url, {}).then(res=>{
                        setTimeout(() => {
                            commit('SET_LOGIN_TOKEN', res.value);
                            commit('SET_DOING_LOGIN', false);
                            resolve({bool: true, res})
                         }, 2000);
                      });
                })
                // commit('SET_LOGIN_USER', user);
                return res
            },
            async getLoginUser({ commit }) {
                var url = '/auth/getUserInfo';
                var res= Vue.http.post(url, {});
                return res;
            },
            async logout({ commit }) {
                // 模拟退出
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        sessionStorage.removeItem('user')
                        sessionStorage.removeItem('token')
                        commit('SET_LOGIN_USER', null)
                        resolve({ bool: true });
                        //
                        location.assign("../login/login.html");
                    }, 2000)
                })
            },
            async getMenuList({commit}){
                var url ='/base/getMenuList';
                var res= Vue.http.post(url, {});
                return res;
            },
        },
        mutations: {
            SET_DOING_LOGIN(state, isLogin) {
                state.isLogin = isLogin
            },
            SET_LOGIN_USER(state, user) {
                state.user = user

            },
            SET_LOGIN_TOKEN(state, token) {
                if (token) {
                    sessionStorage.setItem('token', token)
                } else {
                    sessionStorage.removeItem('token')
                }
            }
        }
    }),
}
