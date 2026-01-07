import { fileURLToPath, URL } from 'node:url'
import vitePluginSitemap from 'vite-plugin-sitemap'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { hostname } from 'node:os'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
   vitePluginSitemap({
  hostname: 'https://autonovacorp.netlify.app',
})
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
