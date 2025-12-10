/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'www.pinterest.com',
            },
            {
                protocol: 'https',
                hostname: 'biomedical.edu.np',
                pathname: '/**'
            }
        ],

    },

    // Proxy all /api requests to the backend
};

export default nextConfig;
