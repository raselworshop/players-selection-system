/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sora': ["Sora", 'sans-serif'],
      'inter': ["Inter", 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/bg-shadow.png')",
        'news-letter': "url('/bg-shadow.png')",
        'footer-texture': "url('/logo-footer.png')",
      },
      colors: {
        'yellow-btn': 'rgba(231, 254, 41, 1)',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}

