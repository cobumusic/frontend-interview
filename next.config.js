//eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");
const withBundleAnalyzer = require("@next/bundle-analyzer")({ //eslint-disable-line @typescript-eslint/no-require-imports
  enabled: process.env.ANALYZE === "true",
});


const nextConfig = {
  output: "standalone",
  sassOptions: {
    includePaths: [
      path.join(__dirname, "src/styles/"),
      path.join(__dirname, "../"),
    ],
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      loader: "@svgr/webpack",
      options: {
        svgo: false,
      },
    });

    return config;
  },
};



module.exports = withBundleAnalyzer(nextConfig);
