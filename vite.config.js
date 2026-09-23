import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 4000,
    cors: true,
    // Leading dot allows any ngrok subdomain, since the free URL changes each session.
    allowedHosts: ['.ngrok-free.app'],
  },
})

