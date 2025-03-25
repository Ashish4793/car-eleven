/** @type {import('next').NextConfig} */
const nextConfig = {
    
    images: {
        remotePatterns : [
            {
                protocol: 'https',
                hostname: 'cdn.whichcar.com.au',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'img.icons8.com',
                pathname: '**'
            }
        ],
    },
};

export default nextConfig;
