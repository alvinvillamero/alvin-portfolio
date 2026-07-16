module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-sm': ['2.25rem', { lineHeight: '1.12', letterSpacing: '-0.03em' }],
        display: ['2.65rem', { lineHeight: '1.1', letterSpacing: '-0.035em' }],
        section: ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.025em' }],
      },
      colors: {
        // "Ink & Copper" system — single warm accent on deep blue-black ink.
        surface: {
          950: '#0a0c10',
          900: '#12151c',
          850: '#171b24',
        },
        brand: {
          300: '#f0c67e',
          400: '#f0b254',
          500: '#e8a33d',
          600: '#d18a26',
          700: '#b87a1f',
          950: '#2a1d08',
        },
        // Stock hue names remapped so legacy utility classes cohere with the
        // copper/ink system without editing every class instance.
        fuchsia: {
          300: '#f0c67e',
          400: '#f0b254',
          500: '#e8a33d',
          600: '#d18a26',
          700: '#b87a1f',
        },
        violet: {
          300: '#e5b877',
          400: '#dca34e',
          500: '#c98f33',
          600: '#b87a1f',
          700: '#96631a',
        },
        cyan: {
          300: '#e8ddc8',
          400: '#d9c9a8',
          500: '#c4b18a',
        },
        indigo: {
          900: '#12151c',
          950: '#0a0c10',
        },
        primary: {
          DEFAULT: '#e8a33d',
          light: '#f0b254',
        },
        dark: {
          DEFAULT: '#0a0c10',
          light: '#171b24',
        },
      },
      animation: {
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'fadeIn': 'fadeIn 1s ease-in-out forwards',
        'cursor-blink': 'cursor-blink 1.1s steps(1) infinite',
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.01)', opacity: '0.9' },
        },
        'fadeIn': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'cursor-blink': {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
