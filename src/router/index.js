import Vue from 'vue'
import VueRouter from 'vue-router'
import foo from '@/components/pages/foo'
import about from '@/components/pages/about'
import second from '@/components/pages/second'
import third from '@/components/pages/third'
import forth from '@/components/pages/forth'
import fifth from '@/components/pages/fifth'
import sixth from '@/components/pages/sixth'


import tutorial from '@/components/tutorial'
import addTut from '@/components/addTut'


Vue.use(VueRouter)

const routes = [ {path: '/foo', component: foo },
{ path: '/about', component: about },
{path: '/second', component: second},
{path: '/third', component: third},
{path: '/forth', component: forth},
{path: '/fifth', component: fifth},
{path: '/sixth', component: sixth},


{path: '/tutorial', component: tutorial},
{path: '/addTut', component: addTut},





] 

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
