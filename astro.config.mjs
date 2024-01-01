import { defineConfig, sharpImageService } from 'astro/config';
import {} from 'sharp';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	image: {
		service: sharpImageService(),
	},
	base: '/frontend-mentor',
});
