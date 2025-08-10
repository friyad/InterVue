import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClassBinding from '@/views/ClassBinding.vue'
import ListBinding from '@/views/ListBinding.vue'
import ListDetails from '@/views/ListDetails.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/class-binding',
      name: 'Class Binding',
      component: ClassBinding,
    },
    {
      path: '/list-binding',
      name: 'List Binding',
      component: ListBinding,
    },
    {
      path: '/list-binding/:id',
      name: 'List Details',
      component: ListDetails,
    },
  ],
})

export default router
