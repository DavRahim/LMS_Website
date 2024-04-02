/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        domains: ["res.cloudinary.com", "randomuser.me", "imgs.search.brave.com"]
    },
    experimental:{
        missingSuspenseWithCSRBailout: false,
    }
};

export default nextConfig;
