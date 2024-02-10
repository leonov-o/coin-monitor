/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            'animation': {
                'text': 'text 4s ease infinite alternate',
            },
            'keyframes': {
                'text': {
                    '0%, 100%': {
                        'background-position': '0% 50%',
                        'background-size': '300%'
                    },
                    '50%': {
                        'background-position': '100% 50%',
                        'background-size': '300%'
                    }
                },
            }
        },
    },
    plugins: [],
}

