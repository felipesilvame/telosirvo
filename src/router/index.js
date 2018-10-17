import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Telosirvo from '@/views/Index'

Vue.use(Router)
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


export default new Router({
  routes: [
    {
      path: '/test',
      name: 'Test',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'TELosirvo',
      component: Telosirvo,
    }
  ]
})
