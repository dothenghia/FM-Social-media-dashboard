import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	base :'/FM-Social-media-dashboard/',
	plugins: [react()],
})
