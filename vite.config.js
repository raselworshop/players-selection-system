import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 'url': 'path-to-your-browser-compatible-url-module', // এটি ব্রাউজার কম্প্যাটিবল মডিউলে পয়েন্ট করতে হবে
    },
  },
})
