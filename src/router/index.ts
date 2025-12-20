import DashboardView from '@/views/DashboardView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '../layouts/DashboardPage.vue'
import LandingPage from '../layouts/LandingPage.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LandingPage,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        }
      ],
    },
    {
      path: '/dashboard',
      component: DashboardPage,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: DashboardView,
        },
        {
          path: '/dashboard/album-reviews',
          name: 'album-reviews',
          component: DashboardView,
        },
        {
          path: '/dashboard/artist-reviews',
          name: 'artist-reviews',
          component: DashboardView,
        },
        {
          path: '/dashboard/track-reviews',
          name: 'track-reviews',
          component: DashboardView,
        },
      ],
    },
  ],
})

export default router
