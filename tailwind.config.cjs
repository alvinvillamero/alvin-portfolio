module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'display-sm': ['2.25rem', { lineHeight: '1.12', letterSpacing: '-0.03em' }],
        display: ['2.65rem', { lineHeight: '1.1', letterSpacing: '-0.035em' }],
        section: ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.025em' }],
      },
      colors: {
        surface: {
          950: '#0a0f1c',
          900: '#0e1524',
          850: '#121a2c',
        },
        brand: {
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          950: '#1e1b4b',
        },
        primary: {
          DEFAULT: '#4f46e5',
          light: '#a855f7',
        },
        dark: {
          DEFAULT: '#0B0B13',
          light: '#1A1A2E',
        },
      },
      animation: {
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'fadeIn': 'fadeIn 1s ease-in-out forwards',
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
      },
    },
  },
  plugins: [],
}
