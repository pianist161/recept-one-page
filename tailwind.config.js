/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}', './index.html'],
	theme: {
		extend: {
			minWidth: {
				375: '375px',
			},
			maxWidth: {
				1440: '1440px',
			},
		},
		colors: {
			'custom-hsl': 'hsl(210, 100%, 50%)',
			'Rose-White': 'hsl(330, 100%, 98%)',
			'Wenge-Brown': 'hsl(30, 10%, 34%)',
			'White-color': 'hsl(0, 0%, 100%)',
			'Egg-shell': 'hsl(30, 54%, 90%)',
			'Light-Grey': 'hsl(30, 18%, 87%)',
			'Wenge-Brown': 'hsl(30, 10%, 34%)',
			'Dark-Charcoal': 'hsl(24, 5%, 18%)',
			'Nut-meg': 'hsl(14, 45%, 36%)',
			'Dark-Raspberry': 'hsl(332, 51%, 32%)',
		},
		fontFamily: {
			'young-serif': ['"Young Serif"', 'serif'],
			'out-fit': ['"Outfit"', 'sans - serif'],
		},
		/* fontFamily: {
			'press-start': ['"Press Start 2P"', 'cursive'],
			outfit: ['"Outfit"', 'sans - serif'],
		}, */
	},
	plugins: [],
}
