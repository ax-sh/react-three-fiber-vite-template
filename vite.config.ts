import * as fs from 'node:fs'
import TurboConsole from 'unplugin-turbo-console/vite'
import { defineConfig } from 'vite'
import banner from 'vite-plugin-banner'
import checker from 'vite-plugin-checker'
import Pages from 'vite-plugin-pages'
import { VitePWA } from 'vite-plugin-pwa'
import { qrcode } from 'vite-plugin-qrcode'
import removeConsole from 'vite-plugin-remove-console'

// import VitePluginRadar from 'vite-plugin-radar'
// import { ViteTips } from 'vite-plugin-tips'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		qrcode(), // only applies in dev mode
		checker({
			// e.g. use TypeScript check
			typescript: true,
			eslint: {
				// for example, lint .ts and .tsx
				lintCommand: 'eslint "./src/**/*.{ts,tsx}"'
			}
		}),
		// ViteTips(),
		TurboConsole({
			/* options here */
		}),
		// VitePluginRadar({
		// 	// Google Analytics tag injection
		// 	analytics: {
		// 		id: 'G-XXXXX'
		// 	}
		// }),
		banner('AX-SH TEMPLATE'),
		VitePWA(),
		react(),
		Pages(),
		removeConsole()
		// {
		// 	name: 'list-files-plugin',
		// 	configResolved() {
		// 		function listFilesInDirectory(directory) {
		// 			const files = fs.readdirSync(directory)
		// 			return files
		// 		}
		//
		// 		const publicFiles = listFilesInDirectory('./public/textures/wood')
		// 		console.log('Public files:', publicFiles)
		// 	}
		// }
	],
	server: {
		host: true
	}
})
