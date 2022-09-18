import nprogress from '@/config/nprogress'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { AxiosCanceler } from '@/api/helper/axiosCancel'
import { GlobalStore } from '@/store'
import Home from './modules/home'

const axiosCancel = new AxiosCanceler()
const routes: Array<RouteRecordRaw> = [
  ...Home,
  {
    path: '/not_found',
    name: '404',
    component: () => import('@views/404/index.vue')
  },
  {
		// 找不到路由重定向到404页面
		path: "/:pathMatch(.*)",
		redirect: { name: "404" }
	},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  
  nprogress.start()
  axiosCancel.removeAllPending()

  next()
})
router.afterEach((to, from, failure) => {
  nprogress.done()
  
  // document.title = to.meta.title as string
})
export default router