const supabaseHost = 'jhjuryhhmcioqdwadcaw.supabase.co'

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' blob: data: https://${supabaseHost};
  connect-src 'self' https://${supabaseHost} wss://${supabaseHost};
  frame-ancestors 'none';
`.replace(/\n/g, ' ').trim()

const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // XSS protection
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy,
          },
          // Prevent MIME sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Clickjacking protection (belt + suspenders with CSP frame-ancestors)
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // Referrer info control
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Force HTTPS — start with 1 year, includeSubDomains, preload-ready
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          // Prevent cross-origin info leaks
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
        ],
      },
    ]
  },
}

export default nextConfig