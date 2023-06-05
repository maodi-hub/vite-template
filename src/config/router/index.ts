import { createRouter, createWebHistory } from 'vue-router';

import { WHITE_LIST, NOT_FOUND } from "@/router/routes";

const router = createRouter({
  history: createWebHistory(),
  routes: [...WHITE_LIST, ...NOT_FOUND],
})

export default router;