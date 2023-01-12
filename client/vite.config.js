import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'login.html'),
<<<<<<< HEAD
        nested: resolve(__dirname, 'beranda.html'),
=======
        nested: resolve(__dirname, 'signup.html'),
>>>>>>> 2527b8e4412fbf7ab44a8d8c18eed908560673b8
      },
    },
  },
});