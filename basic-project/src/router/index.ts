import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import RepositoryDetails from '../views/RepositoryDetails.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: () => import('../pages/AboutMe.vue')
    },
    {
      path: '/internal',
      name: 'internalDB',
      component: () => import('../pages/InternalDB.vue')
    },
    {
      path: '/githubAPI',
      name: 'githubAPI',
      component: () => import('../pages/GitHubAPI.vue')
    },
    {
      path: '/repositories/:repositoryName',
      name: 'RepositoryDetails',
      component: RepositoryDetails
    }
  ]
})

export default router
