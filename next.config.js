const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    // explicitly set the Turbopack root to this project directory
    root: path.join(__dirname),
  },
};

module.exports = nextConfig;
