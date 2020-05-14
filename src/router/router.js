/*
 * @Author: your name
 * @Date: 2020-05-13 19:49:13
 * @LastEditTime: 2020-05-14 17:19:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /component-vue/src/router/router.js
 */
export default [{
  path: '/',
  redirect: '/table'
}, {
  path: '/table',
  component: () => import('@/container/table.vue')
}];
