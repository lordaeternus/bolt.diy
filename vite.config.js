import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0', // permite acesso externo
    allowedHosts: ['automacao-boltdiy.0rau8r.easypanel.host'] // seu domínio
  }
});
