import { createApp } from 'vue';
import "./style";
import "./router";
import "./langs";
import App from './App.vue';
import initPlugins from './plugins';

import type { Component, ComputedOptions, MethodOptions } from "vue";

function bootstrap(root: Component<any, any, any, ComputedOptions, MethodOptions>) {
  const app = createApp(root);

  initPlugins(app);

  app.mount('#app')
}
bootstrap(App);

