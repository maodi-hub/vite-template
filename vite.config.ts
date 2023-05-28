import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import topLevelAwait from 'vite-plugin-top-level-await';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 9527,
    strictPort: true,
    open: true,
    proxy: {
      '/api': {
        target: '',
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [
    vue(),
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: '__tla',
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: i => `__tla_${i}`
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    }
  },
  build: {
    target: 'es2015',
    minify: 'esbuild',
    outDir: 'dist',
    assetsInlineLimit: 2000,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1500,
			rollupOptions: {
				output: {
					// Static resource classification and packaging
					chunkFileNames: "assets/js/[name]-[hash].js",
					entryFileNames: "assets/js/[name]-[hash].js",
					assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
				}
			}
  },
  optimizeDeps: {
    include: ['esm-dep > cjs-dep']
  },
  assetsInclude: ['**/*.xlsx']
})
