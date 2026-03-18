import build from '@hono/vite-build/cloudflare-pages'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    build({
      entry: 'index.tsx'   // ← هذا هو الحل (الملف في الجذر)
    })
  ]
})
