import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'login.html'),
        nested: resolve(__dirname, 'signup.html'),
        nested: resolve(__dirname, 'beranda1.html'),
      },
    },
  },
});