import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Characters from '@/components/Characters'
import Character from '@/components/Character'
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import Edit from '@/components/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/characters',
      name: 'Characters',
      component: Characters
    },
    {
      path: '/character',
      name: 'Character',
      component: Character
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit,
      props: true
    },
    {
      path: '/about',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/contact',
      name: 'ContactUs',
      component: ContactUs
    }
  ]
})
