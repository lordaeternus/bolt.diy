import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0', // ESSENCIAL para aceitar conexões externas!
    port: 5173,       // ou a porta que o Easypanel disponibiliza
    allowedHosts: [
      'automacao-boltdiy.0rau8r.easypanel.host'
    ],
    strictPort: true  // garante que a porta não será alterada automaticamente
  }
});
