import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import topLevelAwait from 'vite-plugin-top-level-await'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  json: {
    stringify: true
  },
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
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
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
      '@assets': resolve(__dirname,'./src/assets'),
      '@views': resolve(__dirname,'./src/views'),
      '@components': resolve(__dirname,'./src/components'),
      '@api': resolve(__dirname,'./src/api'),
      '@config': resolve(__dirname,'./src/config'),
      '@store': resolve(__dirname,'./src/store'),
      '@style': resolve(__dirname, './src/style')
    }
  },
  build: {
    target: 'es2015',
    minify: 'esbuild',
    outDir: 'dist',
    assetsInlineLimit: 2000,
    reportCompressedSize: true
  },
  optimizeDeps: {
    include: ['esm-dep > cjs-dep']
  },
  assetsInclude: ['**/*.xlsx']
})
