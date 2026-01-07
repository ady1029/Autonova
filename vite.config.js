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
      outDir: 'dist',
      routes: [
        '/',
        '/servicios',
        '/contacto',
        '/nosotros',
        '/proyectos',
        '/soporte'
      ],
      changefreq: 'daily',
      priority: 1.0
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
