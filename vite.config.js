import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://random-d.uk',
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  }
})
