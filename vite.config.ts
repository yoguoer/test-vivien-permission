import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    host:'0.0.0.0',//解决vite use--host to expose
    port:8080,
    open:true
  },
  // 配置vite别名
  resolve:{
    alias:[
      {
        find:'@',
        replacement:resolve(__dirname,'src')
      }
    ]
  },

})