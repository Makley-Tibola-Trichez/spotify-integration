const defaultConfig = require('tailwindcss/defaultConfig')
const formsPlugin = require('@tailwindcss/forms')

/** @type {import('tailwindcss/types').Config} */
const config = {
	content: ['index.html', 'src/**/*.tsx'],
	theme: {
		colors: {
			green: "#57B660",
		
			neutral: {
				0: "#FFFFFF",
				300: "#949EA2",
				600: "#303030",
				700: "#181414",
				800: "#090707",
				900: "#000000"
			}

		}
		// fontFamily: {
		// 	sans: ['Inter', ...defaultConfig.theme.fontFamily.sans]
		// }
	},
	experimental: { optimizeUniversalDefaults: true },
	plugins: [formsPlugin]
}
module.exports = config
