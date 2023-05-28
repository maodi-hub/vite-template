import router from "@/config/router";

import type { RouteRecordRaw } from 'vue-router';

import Home from './modules/home';

const routes: Array<RouteRecordRaw> = [
  ...Home,
  {
    path: '/not_found',
    name: '404',
    component: () => import('@/views/404/index.vue')
  },
  {
		// 找不到路由重定向到404页面
		path: "/:pathMatch(.*)",
		redirect: { name: "404" }
	},
];

routes.forEach(route => router.addRoute(route));
