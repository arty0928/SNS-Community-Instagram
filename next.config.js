// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

const colors = require('tailwindcss/colors')

module.exports = {
  images: {
    domains: ['images.unsplash.com'],
  },
  
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
      },
      backgroundColor: ['active'],
    },
  },
  variants: {},
  plugins: [],
}
