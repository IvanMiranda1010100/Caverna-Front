import path from "path"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      '@Components': '/src/Components',
      '@Pages': '/src/Pages',
      '@lib': '/src/lib',
      '@store': '/src/store',
      '@auth': '/src/auth',
      '@dashboard': '/src/dashboard',
    },
  },
  build: {
    outDir: 'dist',  // Asegúrate de que los archivos de salida estén en 'dist'
  },
})
