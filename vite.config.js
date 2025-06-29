// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true, // necessário para aceitar conexões externas
    port: 3000, // ou a porta que o easypanel exige
    allowedHosts: ['automacao-boltdiy.0rau8r.easypanel.host'],
    strictPort: false // evita conflitos se a porta estiver ocupada
  }
});
