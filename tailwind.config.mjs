/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// QR Code Component
				'qcc-grayish-blue': 'var(--qcc-grayish-blue)',
				'qcc-dark-blue': 'var(--qcc-dark-blue)',
				'qcc-light-gray': 'var(--qcc-light-gray)',

				// Blog Preview Card
				'bpc-primary': 'var(--bpc-primary)',
				'bpc-secondary': 'var(--bpc-secondary)',

				// Order Summary Component
				'osc-bright-blue': 'var(--osc-bright-blue)',
				'osc-pale-blue': 'var(--osc-pale-blue)',
				'osc-very-pale-blue': 'var(--osc-very-pale-blue)',
				'osc-dark-blue': 'var(--osc-dark-blue)',
				'osc-desaturated-blue': 'var(--osc-desaturated-blue)',
			},
			fontFamily: {
				'qcc-font-family': ['var(--qcc-font-family)'],
				'bpc-font-family': ['var(--bpc-font-family)'],
				'osc-font-family': ['var(--osc-font-family)'],
			},
		},
	},
	plugins: [],
};
