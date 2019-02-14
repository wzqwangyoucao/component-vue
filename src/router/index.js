import Vue from 'vue';
import Router from 'vue-router';
import Switch from '@/components/Switch';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/switch',
      component: Switch
    }
  ],
});
