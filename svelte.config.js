import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { resolve } from "path";

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'docs',
			assets: 'docs',
			fallback: null
		}),
		paths:{
			base: dev ? "" : "/svelte-cyberComp"
		},
		vite: {
			resolve: {
				preserveSymlinks: true,
				alias: {
					$lib: resolve('./src/lib'),
					$component: resolve('./src/component'),
					$model: resolve('./src/model'),
					$store: resolve('./src/store')
				}
			},
			server: {
				port: 3000
			}
		}
	}
};

export default config;
