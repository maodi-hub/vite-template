import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import topLevelAwait from "vite-plugin-top-level-await";
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
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: (i) => `__tla_${i}`,
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
