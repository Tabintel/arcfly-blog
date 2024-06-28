/** @type {import('next').NextConfig} */
import {withContentlayer} from 'next-contentlayer'
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "generated.vusercontent.net/",
      "avatars.githubusercontent.com",
    ],
    formats: ["image/avif", "image/webp"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        {
          loader: "next-mdx-remote/loader",
        },
      ],
    });

    return config;
  },
  compiler: {
    styledComponents: true,
  },
};

export default withContentlayer(nextConfig);
