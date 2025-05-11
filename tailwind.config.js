/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF1493', // bright pink
        'accent': '#4169E1', // royal blue
        'background': '#FFFFFF', // minimalist white background
        'foreground': '#111827', // minimalist dark text
        'primary-purple': '#7B1FA2',
        'primary-pink': '#E91E63',
        'primary-orange': '#FF5722',
        'primary-yellow': '#FFC107',
        'primary-teal': '#009688',
        'primary-blue': '#2196F3',
        'primary-lime': '#CDDC39',
        'primary-cyan': '#00BCD4',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)'],
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'fade-in': 'fade-in 1s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': {
            transform: 'translateY(20px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

