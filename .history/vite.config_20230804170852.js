import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import AutoImport from 'unplugin-auto-import/vite';
// https://vitejs.dev/config/

export default defineConfig({ command })=> {
  return {
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue', 'vue-router'],
      }),
      viteMockServe({
        localEnabled: command === 'serve',
      }),
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
    }
  }
}