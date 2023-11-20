import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Tropic OSS',
			logo: {
				src: './src/assets/logo.svg',
			},
			social: {
				github: 'https://github.com/tropic-oss/',
			},
			sidebar: [
				{
					label: 'Resources',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Useful Development Resources', link: '/resources/useful/' },
					],
				},
			],
		}),
	],
});
