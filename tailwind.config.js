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
      borderColor: {
        hairline: 'rgba(255,255,255,0.06)',
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
        'panel':    '0 30px 80px -20px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
        'panel-lg': '0 40px 100px -20px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)',
        'panel-xl': '0 50px 120px -30px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.06)',
        'cta-light':       '0 10px 40px -10px rgba(255,255,255,0.40)',
        'cta-light-hover': '0 14px 50px -10px rgba(255,255,255,0.55)',
        'card-glow':       '0 30px 70px -25px rgba(4,159,217,0.25)',
      },
    },
  },
  plugins: [],
}
