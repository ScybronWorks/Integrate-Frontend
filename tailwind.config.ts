import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradient-primary-linear': 'linear-gradient(188.71deg, #8F55CE 0%, #402CB1 100%)',
            },
            colors: {
                primary: '#4F34B7',
                secondary: '#CDC7ED',
                titleBlack: '#1E1E1E',
                textMuted: '#817E7B',
                cardBrown: '#393023',
            },
            fontFamily: {
                lexend: ['Lexend', 'sans-serif'],
                italianno: ['Italianno', 'cursive'],
            },
        },
    },
    plugins: [],
};
export default config;
