import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base fica /levva-landing/ só no build (GitHub Pages serve em username.github.io/levva-landing/);
// no dev continua na raiz, senão o servidor local passa a exigir esse prefixo na URL.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/levva-landing/' : '/',
  plugins: [react()],
}))
