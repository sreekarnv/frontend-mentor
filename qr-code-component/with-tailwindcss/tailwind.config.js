/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/index.html'],
	theme: {
		colors: {
			grayishBlue: 'var(--grayish-blue)',
			darkBlue: 'var(--dark-blue)',
			white: 'var(--white)',
			lightGray: 'var(--light-gray)',
		},
		fontFamily: {
			sans: ['var(--font-family)'],
		},
	},
	plugins: [],
};
