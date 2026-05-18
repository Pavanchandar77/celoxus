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
          DEFAULT: '#6366f1',
          50:  '#eef2ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
        violet: {
          400: '#a78bfa',
          500: '#8b5cf6',
        },
        cisco: { blue: '#6366f1' },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["'Satoshi'", "'General Sans'", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        'glow-accent': '0 0 0 1px rgba(99,102,241,0.25), 0 8px 40px -8px rgba(99,102,241,0.45)',
        'card': '0 1px 0 rgba(255,255,255,0.04) inset, 0 30px 60px -30px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
}
