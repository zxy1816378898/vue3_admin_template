import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import AutoImport from 'unplugin-auto-import/vite';
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
    }),
    viteMockServe({
      mockPath: "./src/mock/",
      supportTs: false
    })
  ],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: {
      '@': '/src',
    },
    dedupe: ['vue'],
  },
  base: './',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          '@import "@/assets/style/_defaultstyle.scss";@import "@/assets/style/_mixin.scss";@import "@/assets/style/_mixinanimate.scss";@import "@/assets/style/_variables.scss";',
      },
    },
  },
  server: {
    port: 97,
    host: true,
    open: true,
    proxy: {
      '/dev-api': {
        target: 'losthost:97',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/dev-api/, ''),
      },
    },
  },
});
