/** @type {import("tailwindcss").Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Quicksand', 'sans-serif']
		},
		extend: {
			colors: {
				'primary-light': '#FFFBED',
				'primary-dark': '#0C0C14FF'
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
