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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: () => import('../pages/AboutMe.vue')
    },
    {
      path: '/classprojects',
      name: 'classprojects',
      component: () => import('../pages/ClassProjects.vue')
    },
    {
      path: '/passionprojects',
      name: 'passionprojects',
      component: () => import('../pages/PassionProjects.vue')
    },
    {
      path: '/repositories/:repositoryName',
      name: 'RepositoryDetails',
      component: RepositoryDetails
    }
  ]
})

export default router
