export default [
  {
    path: '/',
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/Home/index.vue')
      }
    ]
  }
]