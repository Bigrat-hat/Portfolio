import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Aditya | Portfolio',
        short_name: 'Aditya Portfolio',
        description: 'Aspiring Cloud & DevOps Engineer | Networking, Linux & AWS Infrastructure',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  // Use the repository subpath only for GitHub Pages; other hosts serve from '/'.
  base: process.env.GITHUB_PAGES === 'true' ? '/Portfolio/' : '/',
  server: {
    host: true,
  },
})
