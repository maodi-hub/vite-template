export default [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@views/Home/index.vue')
      },
      {
        path: 'charts',
        name: 'charts',
        component: () => import('@views/Charts/index.vue')
      },
    ]
  }
]