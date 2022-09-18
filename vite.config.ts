import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@assets': resolve(__dirname,'./src/assets'),
      '@views': resolve(__dirname,'./src/views'),
      '@components': resolve(__dirname,'./src/components'),
      '@apis': resolve(__dirname,'./src/api'),
      '@config': resolve(__dirname,'./src/config'),
      '@store': resolve(__dirname,'./src/store'),
      '@style': resolve(__dirname, './src/style')
    }
  }
})
