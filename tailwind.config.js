/* eslint-env node */
/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: 'class',
    content: ['src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                press: {
                    0: 'var(--press-0)',
                    1: 'var(--press-1)',
                    2: 'var(--press-2)',
                    3: 'var(--press-3)',
                    4: 'var(--press-4)',
                    5: 'var(--press-5)',
                    6: 'var(--press-6)',
                    7: 'var(--press-7)',
                    8: 'var(--press-8)',
                    9: 'var(--press-9)',
                    10: 'var(--press-10)',
                },
            },
            fontFamily: {
                serif: ['var(--font-serif)'],
                sans: ['var(--font-sans)'],
                mono: ['var(--font-mono)'],
            },
            keyframes: {
                'roll-in': {
                    '0%': {
                        transform: 'translate(0px, 320px) scale(1, 0)',
                    },
                    '100%': {
                        transform: 'translate(0px, 0px) scale(1, 1)',
                    },
                },
                'roll-out': {
                    '0%': {
                        transform: 'scale(1, 1)',
                    },
                    '100%': {
                        transform: 'scale(1, 0)',
                    },
                },
            },
            animation: {
                'roll-in': 'roll-in 0.25s cubic-bezier(0.37, 0, 0.63, 1)',
                'roll-out': 'roll-out 0.25s cubic-bezier(0.37, 0, 0.63, 1)',
            },
        },
    },
    plugins: [],
}
