import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base fica na raiz — o site é servido no domínio próprio
// sua-dor-com-ia.levva.io (ver public/CNAME), não mais em username.github.io/levva-landing/.
export default defineConfig(() => ({
  base: '/',
  plugins: [react()],
}))
