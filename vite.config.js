import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // O GitHub Pages publica em https://leandroadeko.github.io/hinara-kelly/
  base: '/hinara-kelly/',
})
