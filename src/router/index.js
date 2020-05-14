/*
 * @Author: your name
 * @Date: 2020-05-12 20:39:48
 * @LastEditTime: 2020-05-13 20:39:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /component-vue/src/router/index.js
 */
import Vue from 'vue';
import Router from 'vue-router';
import router from './router.js';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: router
});
