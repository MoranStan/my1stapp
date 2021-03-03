import Vue from 'vue'
import VueRouter from 'vue-router'
import foo from '@/components/foo'
import about from '@/components/about'
import second from '@/components/second'
import third from '@/components/third'
import forth from '@/components/forth'
import fifth from '@/components/fifth'

import tutorial from '@/components/tutorial'
import addTut from '@/components/addTut'


Vue.use(VueRouter)

const routes = [ {path: '/foo', component: foo },
{ path: '/about', component: about },
{path: '/second', component: second},
{path: '/third', component: third},
{path: '/forth', component: forth},
{path: '/fifth', component: fifth},

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
