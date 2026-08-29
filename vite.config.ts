
import { defineConfig } from 'vite'
import react from '@vitejs/react-swc' // or your standard react plugin

export default defineConfig({
  base: '/cinematic-portfolio/', // Add this exact line
  plugins: [react()],
})
