const daisyui = require('daisyui');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},
	daisyui: {
		themes: ["light", "dark",
			{
				dark: {
					...require("daisyui/src/theming/themes")["[data-theme=dark]"],
					"primary": "#E6F7FFFF"
				},
				light: {
					...require("daisyui/src/theming/themes")["[data-theme=light]"],
					"primary": "#000112",
					"success": "#0841FF"
				},

			}
		],
	},

	plugins: [daisyui]
};

module.exports = config;
