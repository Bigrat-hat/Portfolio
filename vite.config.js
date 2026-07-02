import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Local development and Vercel both serve this app from the site root.
  base: '/',
  server: {
    host: true,
  },
})
