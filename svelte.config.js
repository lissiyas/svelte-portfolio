import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// Default options are fine for Render's static hosting
			pages: 'build',
			assets: 'build',
			fallback: 'index.html', // Use 'index.html' as a fallback for SPA-like routing
			precompress: false
		})
	}
};

export default config;
