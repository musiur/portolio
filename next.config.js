/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    HOST: "http://localhost:3000",
    // HOST_BACKEND: "http://localhost:8080",
    // HOST: "https://musiur.vercel.app/",
    HOST_BACKEND: "https://bewildered-fox-overshirt.cyclic.app/",
  },
};

module.exports = nextConfig;
