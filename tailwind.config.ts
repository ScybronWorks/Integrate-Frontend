import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');

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
                services:
                    'linear-gradient(273.16deg, rgba(0, 0, 0, 0.49) 1.05%, rgba(0, 0, 0, 0.7) 82.9%), url("/img/home/services.png")',
            },
            colors: {
                primary: '#F6B662',
                secondary: '#372A25',
                titleBlack: '#1E1E1E',
                textMuted: '#817E7B',
                cardBrown: '#393023',
                subtitleGray: '#868686',
                teamCardBg: '#DEDAF1',
                contactInputBg: 'rgb(255 243 228)',
                navActive: 'rgb(255 243 228)',

            },
            fontFamily: {
                lexend: ['Lexend', 'sans-serif'],
                italianno: ['Italianno', 'cursive'],
            },
            clipPath: {
                'angled-edge': 'polygon(29% 0, 100% 0, 100% 100%, 0 100%, 0 29%)',
            },
            screens: {
                xs: '400px',
                '1/2xl': '1420px',
                xss: '384px',
                '3xl': '1722px',
                '1/2lx': '1180px',
                ...defaultTheme.screens,
                small:'350px'
            },
            backgroundPosition: {
                'top-left-1rem': '60% 50%',
            },
            backgroundSize: {
                default: 'cover', // Default size
                '0.7': '70%', // Scale to 0.7
                '0.5': '50%', // Optionally add more scales
            },
        },
    },
    plugins: [],
};
export default config;
