/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'dark-gray': {
					DEFAULT: '#2A2A2A',
					500: '#2A2A2A',
					700: '#12004A',
				},
				'muted-dark-gray': '#5C5F62',
				purpl: {
					DEFAULT: '#684EEA',
					light: '#F5F3FE',
				},
			},
		},
	},
	plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
