import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8085,
    host: '0.0.0.0',
  },
  plugins: [react()],
})
