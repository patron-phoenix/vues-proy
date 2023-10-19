import { createRouter, createWebHistory } from 'vue-router'
import Inico from '../views/Inicio.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Inico
  },
  {
    path: '/areas',
    name: 'areas',
    component: () => import(/* webpackChunkName: "about" */ '../views/Areas.vue')
  },
  {
    path: '/areasAgregar',
    name: 'areasAgregar',
    component: () => import(/* webpackChunkName: "about" */ '../views/AreasAgregar.vue')
  },
  {
    path: '/areas/:id',
    name: 'areasUpdate',
    component: () => import(/* webpackChunkName: "about" */ '../views/AreasUpdate.vue')
  },
  {
    path: '/activos',
    name: 'activos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Activos.vue')
  },
  {
    path: '/activosAgregar',
    name: 'activosAgregar',
    component: () => import(/* webpackChunkName: "about" */ '../views/ActivosAgregar.vue')
  },
  {
    path: '/activos/:id',
    name: 'activosUpdate',
    component: () => import(/* webpackChunkName: "about" */ '../views/ActivosUpdate.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
