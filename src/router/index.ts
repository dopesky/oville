import {
  BuildingOffice2Icon,
  ClipboardDocumentListIcon,
  HomeIcon,
  PhoneIcon,
  WrenchScrewdriverIcon
} from '@heroicons/vue/24/solid'
import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    name: 'home',
    title: 'Home',
    icon: HomeIcon,
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/about',
    name: 'about',
    title: 'The Firm',
    icon: ClipboardDocumentListIcon,
    component: () => import('../views/About.vue')
  },
  {
    path: '/services',
    name: 'services',
    title: 'Services',
    icon: BuildingOffice2Icon,
    component: () => import('../views/Services.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    title: 'Projects',
    icon: WrenchScrewdriverIcon,
    component: () => import('../views/Projects.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    title: 'Contact',
    icon: PhoneIcon,
    component: () => import('../views/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
