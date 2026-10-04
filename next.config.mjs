/** @type {import('next').NextConfig} */

// Bezbednosni HTTP headeri — salju se uz SVAKU stranicu.
// Ne menjaju izgled ni rad sajta; zatvaraju standardne rupe koje botovi probaju.
// Objasnjeno u docs/SAJT_CHECKLIST.md (§3).
const securityHeaders = [
  // Prisili HTTPS 2 godine, i za sve poddomene (svaki *.petkovicsolutions.com
  // na Vercelu je ionako HTTPS). "preload" => A+ na securityheaders.com.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Sajt se ne sme prikazivati unutar tudjeg <iframe> (anti-clickjacking).
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Browser ne sme da "nagadja" tip fajla.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Tudji sajt vidi samo da je poseta dosla sa petkovicsolutions.com, bez detalja.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Sajtu ne trebaju kamera/mikrofon/lokacija — ugasi ih na nivou sajta.
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
