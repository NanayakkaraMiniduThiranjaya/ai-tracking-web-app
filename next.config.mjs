/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.freepik.com',
            },
            {
                protocol: 'https',
                hostname: 'media.istockphoto.com',
            }
        ]
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            // Exclude problematic modules from client bundle
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
                net: false,
                dns: false,
                child_process: false,
                tls: false,
            }
        }
        return config
    },
    serverExternalPackages: ['mongodb', 'mongoose']
};

export default nextConfig;
