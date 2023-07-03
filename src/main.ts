import { createApp } from 'vue';
import "./style";
import "./router";
import "./langs";
import App from './App.vue';
import Directives from "./directives";
import Plugins from './plugins';

import type { Component } from "vue";

function bootstrap(root: Component) {
  const app = createApp(root);

  app.use(Directives);
  
  app.use(Plugins);

  app.mount('#app');
}
bootstrap(App);

