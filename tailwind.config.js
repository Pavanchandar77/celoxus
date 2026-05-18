/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#08080b',
          900: '#0c0c10',
          850: '#101015',
          800: '#15151c',
          700: '#1b1b24',
        },
        accent: {
          DEFAULT: '#049fd9',
          50:  '#ecfeff',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#049fd9',
          600: '#0284c7',
          700: '#0369a1',
        },
        cisco: { blue: '#049fd9' },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["'Satoshi'", "'General Sans'", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        'glow-accent': '0 0 0 1px rgba(4,159,217,0.30), 0 8px 40px -8px rgba(4,159,217,0.55)',
        'card': '0 1px 0 rgba(255,255,255,0.04) inset, 0 30px 60px -30px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
}
