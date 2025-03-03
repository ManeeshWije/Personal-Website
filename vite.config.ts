import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  preview: {
    port: 8080,
    strictPort: true,
    allowedHosts: ["wijeproject.com", "www.wijeproject.com"],
  },
  server: {
    port: 8080,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:8080",
    allowedHosts: ["wijeproject.com", "www.wijeproject.com"],
  },
})
