import { createApp } from 'vue';
import "./style";
import "./router";
import "./langs";
import App from './App.vue';
import Directives from "./directives";
import initPlugins from './plugins';

import type { Component, ComputedOptions, MethodOptions } from "vue";

function bootstrap(root: Component<any, any, any, ComputedOptions, MethodOptions>) {
  const app = createApp(root);

  app.use(Directives);
  
  initPlugins(app);

  app.mount('#app');
}
bootstrap(App);

