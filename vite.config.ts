
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vitest/config'
/// <reference types="vitest" />

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: 'jsdom',
    coverage:{
      provider: 'istanbul'
    }
  },
  plugins: [react()],
  build:{
    target: "ES2020"
  },
  
})
