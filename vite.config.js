import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolioUsingFramework/',  // IMPORTANT: repo name with leading/trailing slashes
  plugins: [react()],
})
