import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    allowedHosts: ['automacao-boltdiy.0rau8r.easypanel.host']
  },
  preview: {
    host: '0.0.0.0',
    allowedHosts: ['automacao-boltdiy.0rau8r.easypanel.host']
  }
});
