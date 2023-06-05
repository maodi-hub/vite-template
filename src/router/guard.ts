import MENU_LIST from "@/assets/json/menu.json";
import $router from "@/config/router";
import nprogress from '@/config/nprogress'
import { AxiosCanceler } from '@/api/helper/axiosCancel';
import { setDynamicRouter } from "@/utils/lib/router";




const axiosCancel = new AxiosCanceler();
let init = false
$router.beforeEach(async (to, from, next) => {
  
  nprogress.start();
  axiosCancel.removeAllPending();
  console.log($router.getRoutes());
  if (!init) {
    await setDynamicRouter(MENU_LIST);
    init = true;
    return next({ ...to, replace: true });
  }
  next()
});

$router.afterEach((to, from, failure) => {
  nprogress.done();
  
  // document.title = to.meta.title as string
});

$router.onError(() => {
  nprogress.done();
})
