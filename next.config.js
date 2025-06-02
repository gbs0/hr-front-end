// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'cardeal.app' }],
        destination: 'https://www.cardeal.app/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.cardeal.app.br' }],
        destination: 'https://www.cardeal.app/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'cardeal.app.br' }],
        destination: 'https://www.cardeal.app/:path*',
        permanent: true,
      },
    ];
  },
  trailingSlash: true,
  images: { unoptimized: true },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  webpack: (config, { _isServer }) => {
    // eslint-disable-next-line no-undef
    config.resolve.alias['@'] = path.join(__dirname, 'app');
    return config;
  },
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;

// /*const path = require("path");
// {

// const withPWAInit = require("next-pwa");

// const isDev = process.env.NODE_ENV !== "production";

// const withPWA = withPWAInit({
//   dest: "public",
//   disable: isDev,
//   register: isDev,
//   skipWaiting: isDev,
//   exclude: [
//     // add buildExcludes here
//     ({ asset, compilation }) => {
//       if (
//         asset.name.startsWith("server/") ||
//         asset.name.match(
//           /^((app-|^)build-manifest\.json|react-loadable-manifest\.json)$/
//         )
//       ) {
//         return true;
//       }
//       if (isDev && !asset.name.startsWith("static/runtime/")) {
//         return true;
//       }
//       return false;
//     },
//   ],
// });
// }
// */

// /* @type {import('next').NextConfig} */
// /*
// const nextConfig = withPWA({
//   images: { unoptimized: true },
//   webpack(config) {
//     if (isDev) {
//       return config;
//     }

//     const registerJs = path.join(
//       path.dirname(require.resolve("next-pwa")),
//       "register.js"
//     );
//     const entry = config.entry;

//     config.entry = () =>
//       entry().then((entries) => {
//         // Automatically registers the SW and enables certain `next-pwa` features in
//         // App Router (https://github.com/shadowwalker/next-pwa/pull/427)
//         if (entries["main-app"] && !entries["main-app"].includes(registerJs)) {
//           if (Array.isArray(entries["main-app"])) {
//             entries["main-app"].unshift(registerJs);
//           } else if (typeof entries["main-app"] === "string") {
//             entries["main-app"] = [registerJs, entries["main-app"]];
//           }
//         }
//         return entries;
//       });

//     return config;
//   },
// });
// module.exports = nextConfig;
// */
