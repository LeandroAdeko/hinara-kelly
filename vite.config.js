import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // O site é publicado pelo GitHub Pages no domínio próprio https://inarissima.com.br/
  // (o domínio fica em public/CNAME). Por isso a base é a raiz.
  base: '/',
})
