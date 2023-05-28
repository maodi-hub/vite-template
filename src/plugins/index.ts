import type { App } from "vue";

const plugins = import.meta.glob("./*/index.ts", { eager: true }) as Record<
  string,
  { default: { init(app: App, ...options: any[]): void } }
>;

export default function initPlugins(app: App) {
  Object.values(plugins).forEach(plugin => plugin.default.init(app));
}
