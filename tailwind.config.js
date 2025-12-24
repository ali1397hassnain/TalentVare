/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Neue Haas Grotesk Display Pro', 'Inter', 'sans-serif'],
            },
            colors: {
                primary: '#0154AA',
                secondary: '#EBF2FF',
                text: {
                    main: '#1F2937',
                    muted: '#6B7280'
                },
                bg: {
                    main: '#F9FAFB',
                    card: '#FFFFFF'
                },
                blue: {
                    50: '#EFF6FF',
                    100: '#DBEAFE',
                    200: '#BFDBFE',
                    300: '#93C5FD',
                    400: '#60A5FA',
                    500: '#1D4ED8',
                    600: '#0154AA',
                    700: '#1E40AF',
                    800: '#1E3A8A',
                    900: '#172554',
                    950: '#0F1E3F',
                },
            }
        },
    },
    plugins: [],
}
