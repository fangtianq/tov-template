import { resolve } from 'path'
import Tov from './presets/tov'
import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
	base:"./",
	resolve: {
		alias: {
			'~/': `${resolve(__dirname, 'src')}/`,
		},
	},
	plugins: [
		Tov(),
		legacy({
			targets: ['Firefox 52']
		})
	],
	build:{
		outDir:"dist",
	},
})
