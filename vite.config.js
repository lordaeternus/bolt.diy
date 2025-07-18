// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { // Adicione esta seção
    allowedHosts: [
      'automacao-boltdiy.0rau8r.easypanel.host'
    ]
  }
})
