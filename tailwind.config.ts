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
                'services': 'linear-gradient(273.16deg, rgba(0, 0, 0, 0.49) 1.05%, rgba(0, 0, 0, 0.7) 82.9%), url("/img/home/services.png")'
            },
            colors: {
                primary: '#4F34B7',
                secondary: '#CDC7ED',
                titleBlack: '#1E1E1E',
                textMuted: '#817E7B',
                cardBrown: '#393023',
                subtitleGray: '#868686',
                teamCardBg: '#DEDAF1',
            },
            fontFamily: {
                lexend: ['Lexend', 'sans-serif'],
                italianno: ['Italianno', 'cursive'],
            },
            clipPath: {
                'angled-edge': 'polygon(29% 0, 100% 0, 100% 100%, 0 100%, 0 29%)',
            },
        },
    },
    plugins: [],
};
export default config;
