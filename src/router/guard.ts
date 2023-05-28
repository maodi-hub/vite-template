import router from "@/config/router";
import nprogress from '@/config/nprogress'
import { AxiosCanceler } from '@/api/helper/axiosCancel'

const axiosCancel = new AxiosCanceler();

router.beforeEach((to, from, next) => {
  
  nprogress.start();
  axiosCancel.removeAllPending();

  next();
});

router.afterEach((to, from, failure) => {
  nprogress.done();
  
  // document.title = to.meta.title as string
});

router.onError(() => {
  nprogress.done();
})
