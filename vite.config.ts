import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' 
    ? '/semicolon-website/' // Ajuste conforme seu repositório GitHub
    : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})

