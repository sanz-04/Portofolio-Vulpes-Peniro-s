import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    // GANTI 'nama_repository_kamu' dengan nama repo GitHub-mu (contoh: '/portofolio/')
    base: './', 
  }
})