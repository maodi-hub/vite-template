import $router from "@/config/router";

import type { RouteRecordRaw } from 'vue-router';

export const WHITE_LIST: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue")
  },
  {
    path: "/layout",
    name: "layout",
    redirect: "/home",
    component: () => import("@/layout/src/default/index.vue"),
    children: []
  },
]

export const NOT_FOUND: RouteRecordRaw[] = [
  {
    path: '/not_found',
    name: '404',
    component: () => import('@/views/404/index.vue'),
  },
  {
		// 找不到路由重定向到404页面
		path: "/:pathMatch(.*)",
		component: () => import('@/views/404/index.vue')
	},
];

