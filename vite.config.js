import { defineConfig } from 'vite'
import dotenv from 'dotenv'
dotenv.config()


export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: process.env.ALLOWED_HOSTS
      ? process.env.ALLOWED_HOSTS.split(',').map(h => h.trim())
      : 'all',
    strictPort: true
  }
})
