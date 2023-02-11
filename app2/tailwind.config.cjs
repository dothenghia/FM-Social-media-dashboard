/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
		// screens: {
		// 	'sm': '640px',
		// 	'md': '768px',
		// 	'lg': '1024px',
		// 	'xl': '1280px',
		// 	'2xl': '1536px',
		// },
		colors: {
			'LimeGreen': '#1db489',
			'BrightRed': '#dc414c',

			'Facebook': '#198ff5',
			'Twitter': '#1ca0f2',
			'Instagram': 'linear-gradient(90deg, #fdc468, #df4996)',
			'YouTube': '#c4032a',

			'LightToggle': '#aeb3cb',
			'LightBG': '#ffffff',
			'LightTopBGPattern': '#f5f7ff',
			'LightCardBG': '#f0f2fa',
			'LightCardBGHover': '#dbdeeb',
			'LightText': '#63687e',
			'LightBigText': '#1e202a',
			
			'DarkToggle': 'linear-gradient(90deg, #378fe6, #3eda82)',
			'DarkBG': '#1e202a',
			'DarkTopBGPattern': '#1f212e',
			'DarkCardBG': '#252a41',
			'DarkText': '#8b97c6',
			'DarkBigText': '#ffffff',
		},
	},
	darkMode: 'class',

	plugins: [],
}
