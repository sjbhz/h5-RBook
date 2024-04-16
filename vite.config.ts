import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './', //打包路径
  build: {
    outDir: 'docs',
    assetsDir: 'assets'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') //设置别名
    }
  },
  server: {
    // host: '192.168.0.103',
    port: 5000, //启动端口
    proxy: {
      // 选项写法
      // '/api': 'http://123.56.85.24:5000'//代理网址
    },
  }
})
