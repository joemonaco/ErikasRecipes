/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'clever-vole-415.convex.cloud',
            }
        ]
    }
};

export default nextConfig;
