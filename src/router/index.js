import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home';
import Food from '@/components/body/Food';
import Critters from '@/components/body/Critters';
import Detail from '@/components/body/Detail';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/food',
      children: [
        {
          path: 'food',
          name: 'Food',
          component: Food
        },
        {
          path: 'critters',
          name: 'Critters',
          component: Critters
        },
        {
          path: 'food/:name',
          name: 'Detail',
          component: Detail
        }
      ]
    },
    { path: '*', redirect: '/' }
  ]
});
