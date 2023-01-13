import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'login.html'),
<<<<<<< HEAD
        nested: resolve(__dirname, 'signup.html'),
        nested: resolve(__dirname, 'beranda1.html'),
=======
        nested: resolve(__dirname, 'beranda.html'),
        nested: resolve(__dirname, 'signup.html'),
        nested: resolve(__dirname, 'artikel.html'),

>>>>>>> 1ed8063bf942a2e4b93014b85400335004f41ab2
      },
    },
  },
});