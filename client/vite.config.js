import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'login.html'),
        nested: resolve(__dirname, 'signup.html'),
        nested: resolve(__dirname, 'artikel.html'),
        nested: resolve(__dirname, 'beranda.html'),
        nested: resolve(__dirname, 'beranda2.html'),
        nested: resolve(__dirname, 'servicedesk.html'),
        nested: resolve(__dirname, 'forum.html'),
        nested: resolve(__dirname, 'artikel-semua.html'),
        nested: resolve(__dirname, 'artikelmasuk.html'),
        nested: resolve(__dirname, 'detail-forum.html'),
        nested: resolve(__dirname, 'forum-semua.html'),
        nested: resolve(__dirname, 'forum-konsep.html'),
        nested: resolve(__dirname, 'forum-mp.html'),
        nested: resolve(__dirname, 'forum-terpublikasikan.html'),
        nested: resolve(__dirname, 'forum-ditolak.html'),
        nested: resolve(__dirname, 'forum-td.html'),
        nested: resolve(__dirname, 'artikel-konsep.html'),
        nested: resolve(__dirname, 'artikel-mp.html'),
        nested: resolve(__dirname, 'artikel-terpublikasikan.html'),
        nested: resolve(__dirname, 'artikel-ditolak.html'),
        nested: resolve(__dirname, 'artikel-tp.html'),
        nested: resolve(__dirname, 'detailartikel.html'),
        nested: resolve(__dirname, 'profil.html'),
        nested: resolve(__dirname, 'login-admin.html'),
      },
    },
  },
});