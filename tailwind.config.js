/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cosmic: {
          black: '#020208',
          900: '#0a0a14',
          800: '#12121e',
          700: '#1a1a2e',
        },
        neon: {
          blue: '#00d4ff',
          cyan: '#00f0ff',
        },
      },
      fontFamily: {
        heading: ['"Rajdhani"', 'system-ui', 'sans-serif'],
        body: ['"Rajdhani"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 212, 255, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};
