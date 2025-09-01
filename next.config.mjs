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
        ],
        formats: ['image/webp', 'image/avif'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    // Enable compression
    compress: true,
    // Enable experimental features for better performance
    experimental: {
        optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
        turbo: {
            rules: {
                '*.svg': {
                    loaders: ['@svgr/webpack'],
                    as: '*.js',
                },
            },
        },
    },
    // Optimize bundle analyzer
    webpack: (config, { isServer, dev }) => {
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

        // Optimize chunk splitting
        if (!dev && !isServer) {
            config.optimization.splitChunks.cacheGroups = {
                ...config.optimization.splitChunks.cacheGroups,
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                    priority: 10,
                },
                common: {
                    name: 'common',
                    minChunks: 2,
                    chunks: 'all',
                    priority: 5,
                    reuseExistingChunk: true,
                },
            }
        }

        return config
    },
    // Optimize server-side packages
    serverExternalPackages: ['mongodb', 'mongoose', '@genkit-ai/googleai', 'genkit'],
    // Enable output file tracing for smaller deployments
    output: 'standalone',
    // Disable source maps in production for smaller builds
    productionBrowserSourceMaps: false,
};

export default nextConfig;
