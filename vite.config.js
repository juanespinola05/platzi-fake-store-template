import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://api.escuelajs.co',
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  }
})
