/** @type {import('next').NextConfig} */
const nextConfig = {
reactStrictMode: true,
  swcMinify: true,
}

const colors = require('tailwindcss/colors')

module.exports = {
  images: {
    domains: ['localhost', 'images.unsplash.com', 'googleusercontent.com','lh3.googleusercontent.com',
      'firebasestorage.googleapis.com', 'googleapis.com','cloudflare-ipfs.com']
    
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
