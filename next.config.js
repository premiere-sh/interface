const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const { createSecureHeaders } = require('next-secure-headers')
const { createHash, BinaryLike } = require('crypto')

module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  webpack5: true
}

module.exports = withPWA({
  async headers() {
    return [
      {
        source: '/',
        headers: createSecureHeaders({
          contentSecurityPolicy: {
            directives: {
              defaultSrc: 'none',
              scriptSrc: ["'self'", 'unsafe-inline'],
              styleSrc: ["'self'", 'unsafe-inline'],
              objectSrc: 'none',
              baseURI: "'self'",
              connectSrc: ["'self'", '//api.premiere.sh'],
              fontSrc: ["'self'", 'data:'],
              frameSrc: ["'self'", '//player.twitch.tv'],
              imgSrc: ["'self'", 'data: blob'],
              manifestSrc: "'self'",
              mediaSrc: "'self'",
              workerSrc: '"self"'
            }
          },
          forceHTTPSRedirect: [
            true,
            { maxAge: 31536000, includeSubDomains: true, preload: true }
          ],
          frameGuard: 'sameorigin',
          xssProtection: 'block-rendering',
          referrerPolicy: 'same-origin'
        })
      }
    ]
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
    buildExcludes: ['_next/static/', '_next/bundles/']
  }
})
