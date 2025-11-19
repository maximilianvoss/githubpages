import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Use '/' for development, '/githubpages/' for production build
  const base = command === 'serve' ? '/' : '/githubpages/';
  
  return {
    plugins: [react(), basicSsl()],
    base: base,
    server: {
      https: true,
      port: 3000,
    }
  }
})

