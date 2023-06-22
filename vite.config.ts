import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import topLevelAwait from "vite-plugin-top-level-await"; // 需要在js，ts文件顶层使用 await时，请注册该插件
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"; // 选择需要实现自动注册组件库解析器，详情请查阅，组件文档
import lagacy from "@vitejs/plugin-legacy";
import { visualizer } from "rollup-plugin-visualizer";

import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 9527,
    open: true,
  },
  plugins: [
    vue(),
    // topLevelAwait({
    //   // The export name of top-level await promise for each chunk module
    //   promiseExportName: "__tla",
    //   // The function to generate import names of top-level await promise in each chunk module
    //   promiseImportName: (i) => `__tla_${i}`,
    // }),
    // Components({
    //   dts: "src/type/components.d.ts", //生成在src路径下名为auto-import.d.ts的声明文件
    //   dirs: ["src/components/global"], //配置需要默认导入的自定义组件文件夹，该文件夹下的所有组件都会自动 import
    //   resolvers: [ElementPlusResolver()] //实现element组件库的按需自动导入
    // }),
    lagacy({
      targets: ["last 2 versions", "safari >=7", "chrome >= 30"], //需要兼容的目标列表，可以设置多个
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"], //面向IE11时需要此插件
    }),
    visualizer(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js"
    },
  },
  build: {
    target: "es2015",
    minify: "esbuild",
    outDir: "dist",
    assetsInlineLimit: 2000,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id, meta) {
          if (id.includes('node_modules')) {
            return 'vendor'; 
          }
        },
        // Static resource classification and packaging
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
    },
  },
  optimizeDeps: {
    include: ["esm-dep > cjs-dep"],
  },
  assetsInclude: ["**/*.xlsx"],
});
