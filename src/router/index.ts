import AppLayout from '@/layout/AppLayout.vue'
import NProgress from '@/plugins/nprogress'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/HomeView.vue'),
        },
        {
          path: 'about',
          component: () => import('@/views/AboutView.vue'),
          children: [
            {
              path: ':id',
              name: 'image-detail',
              component: () => import('@/views/ImageDetail.vue'),
            },
          ],
        },
      ],
    },
    {
      path: '/photo',
      name: 'photo',
      component: () => import('@/views/PhotoView.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
