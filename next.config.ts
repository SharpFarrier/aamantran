import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Client invitations live as static files in public/i/<slug>/index.html
  // and are served at amntrn.in/i/<slug>
  async rewrites() {
    return [
      { source: "/i/:slug", destination: "/i/:slug/index.html" },
      { source: "/i/:slug/", destination: "/i/:slug/index.html" },
    ];
  },
  async headers() {
    const security = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
    ];
    return [
      { source: "/:path*", headers: security },
      // private couple invitations must never show up in search results
      { source: "/i/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }] },
    ];
  },
};

export default nextConfig;
