/**
 * 多页面的rooter拦截器
 */
import Vue from 'vue';
import Axios from 'axios';
import NProgress from 'nprogress';

export default {
    registerBeforeEach: (to, from, next) => {
        console.log("registerBeforeEach");
        let whiteList = ['login'];
        NProgress.start();
        var token = sessionStorage.getItem('token')
        if (!token && whiteList.indexOf(to.name) === -1) {
            // app && app.$message.warning('未授权，请登陆授权后继续');
            NProgress.done()
            return next({ name: 'login' })
        }
        return next()
    },
    registerAfterEach: (transition => {
        setTimeout(() => {
            NProgress.done()
        })
    })
}