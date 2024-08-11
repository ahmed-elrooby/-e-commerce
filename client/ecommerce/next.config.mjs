/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dynamic-chickens-700b5654a9.media.strapiapp.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
