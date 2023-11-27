/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.dxomark.com'],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },
            {
                protocol: "https",
                hostname: "rukminim2.flixcart.com",
            },
            {
                protocol: "https",
                hostname: "m.media-amazon.com",
            },
        ],
    },
};

module.exports = nextConfig;