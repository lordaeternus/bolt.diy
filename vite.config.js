// vite.config.js
export default defineConfig({
  server: {
    host: true,
    port: 3000,
    allowedHosts: 'all' // desabilita o filtro de hosts
  }
});
