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
        nested: resolve(__dirname, 'beranda.html'),
        nested: resolve(__dirname, 'artikel.html'),
        nested: resolve(__dirname, 'artikelmasuk.html'),
        nested: resolve(__dirname, 'detailartikel.html'),
        nested: resolve(__dirname, 'artikel-semua.html'),
        nested: resolve(__dirname, 'artikel-konsep.html'),
        nested: resolve(__dirname, 'artikel-mp.html'),
        nested: resolve(__dirname, 'artikel-terpublikasikan.html'),
        nested: resolve(__dirname, 'artikel-ditolak.html'),
        nested: resolve(__dirname, 'artikel-tp.html'),
        nested: resolve(__dirname, 'beranda.html'),
        nested: resolve(__dirname, 'beranda2.html'),
        nested: resolve(__dirname, 'profil.html'),
        nested: resolve(__dirname, 'dashboard.html'),
        nested: resolve(__dirname, 'dashboard-artikel.html'),
        nested: resolve(__dirname, 'dashboard-artikel(view).html'),
        nested: resolve(__dirname, 'dashboard-artikel(view-pv).html'),
        nested: resolve(__dirname, 'dashboard-sd.html'),
        nested: resolve(__dirname, 'dashboard-sd(view).html'),
        nested: resolve(__dirname, 'dashboard-sd(view-bd).html'),
        // nested: resolve(__dirname, 'dashboard-artikel1.html'),
      },
    },
  },
});