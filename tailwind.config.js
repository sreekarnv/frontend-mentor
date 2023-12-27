/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html'],
	theme: {
		fontFamily: {
			sans: ['Figtree', 'sans-serif'],
		},
		extend: {
			colors: {
				primary: 'hsl(47, 88%, 63%)',
				secondary: '#808080',
			},
		},
	},
	plugins: [],
};
