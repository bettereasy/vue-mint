import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/index';
import Money from '@/pages/money';
import Find from '@/pages/find';
import Me from '@/pages/me';
import Footer from '@/components/footer/footer2';
import Banner from '@/components/banner/banner';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/money',
      name: 'Money',
      component: Money
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
      path: '/footer',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/banner',
      name: 'Banner',
      component: Banner
    }

  ]
});
