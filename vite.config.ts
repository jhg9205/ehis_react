import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import { resolve } from 'path'

export default defineConfig({
	server: {
		host: true,
		port: 5000,
		open: true,
		proxy: {
			'/api': {
				target: 'http://localhost:8080',
				changeOrigin: true,
				secure: false,
				rewrite: path => path.replace(/^\/api/, '')
			}
		}
	},
	build: {
		cssCodeSplit: false,
		chunkSizeWarningLimit: 1500,
		terserOptions: {
			compress: {
				drop_debugger: true,
				pure_funcs: ['console.log', 'console.warn', 'console.debug', 'console.error']
			}
		},
		rollupOptions: {
			output: {
				entryFileNames: 'vite_assets/[name].[hash].js',
				chunkFileNames: 'vite_assets/[name]-[hash].js',
				assetFileNames: 'vite_assets/[name]-[hash][extname]'
			}
		}
		// manifest: true
	},
	resolve: {
		alias: [
			{ find: '@pages', replacement: '/src/pages' },
			{ find: '@css', replacement: '/src/assets/css' },
			{ find: '@images', replacement: '/src/assets/images' },
			{ find: '@class', replacement: '/src/class' },
			{ find: '@modules', replacement: '/src/modules' },
			{ find: '@common', replacement: '/src/common' },
			{ find: '@utils', replacement: '/src/utils' },
			{ find: '@components', replacement: '/src/components' }
		]
	},
	plugins: [
		react(),
		legacy({
			targets: ['ie>=11'],
			additionalLegacyPolyfills: ['regenerator-runtime/runtime']
		})
	]
})
