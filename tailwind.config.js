/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0D0D0D',
        secondaryBg: '#161616',
        cardBg: '#1C1C1C',
        borderColor: '#2A2A2A',
        primaryAccent: '#F59E0B',
        textPrimary: '#FFFFFF',
        textSecondary: '#A1A1AA',
        successColor: '#22C55E',
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
